import React from "react";
import { StyledQuickLinks } from "../styled/QuickLinks.styled";

const Lists = [
  { id: 1, item: "FAQ" },
  { id: 2, item: "News" },
  { id: 3, item: "Legal" },
  { id: 4, item: "Privacy " },
  { id: 5, item: "Partners" },
  { id: 6, item: "Guide " },
  { id: 7, item: "Wallet" },
];

export default function QuickLinks() {
  const QuickList = Lists.map((list) => {
    return (
      <a href="/" key={list.id}>
        {list.item}
      </a>
    );
  });
  return (
    <StyledQuickLinks>
      <h3>Quick Links</h3>
      <div>{QuickList}</div>
    </StyledQuickLinks>
  );
}
