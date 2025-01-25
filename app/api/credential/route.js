import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ;

const users = {
  admin: { username: "admin", password: "admin", role: "admin" },
  user: { username: "user", password: "user", role: "user"},
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const user = users[username];

    if (user && user.password === password) {
      const token = jwt.sign(
        { username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      const headers = new Headers();
      headers.append(
        "Set-Cookie",
        `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
      );

      return new Response(JSON.stringify({ role: user.role, token}), {
        status: 200,
        headers,
      });
    } else {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.error("Internal server error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
