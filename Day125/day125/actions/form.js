"use server";

import fs from "fs/promises";

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("add"));
  let a = await fs.writeFile(
    "data.txt",
    `Hey I am good and my name is ${e.get("name")} and I live in ${e.get(
      "add"
    )}`
  );
};

// export default submitAction;
