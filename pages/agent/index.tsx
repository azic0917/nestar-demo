import withLayoutBasic from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
  const [title, SetTitle] = useState<string>("hello");
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENTS LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
