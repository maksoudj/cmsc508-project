import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "cmsc508.com",
    user: "maksoudj",
    password: "Shout4_maksoudj_GOME",
    port: 3306,
    database: "202310_teams_team23",
  },
});

export { pool };
