import React, { ReactNode } from "react";
import { DOCS_URL } from "../constants";
import { cn } from "@site/src/utils";

const PRODUCTS = [
  {
    label: "APIs",
    link: DOCS_URL,
  },
  {
    label: "Jup Terminal",
    link: "https://terminal.jup.ag/",
  },
];

const Testimonial = (props: {
  source: string;
  dpSrc: string;
  author: string;
  time: string;
  className: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={props.source}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(props.className, "flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10")}
    >
      <div className="flex space-x-3 items-center">
        <img
          alt="dp"
          loading="lazy"
          width="36"
          height="36"
          decoding="async"
          data-nimg="1"
          src={props.dpSrc}
          style={{ color: "transparent" }}
        />
        <div className="flex flex-col">
          <h6 className="text-base text-[#c7f284] font-semibold m-0">
            {props.author}
          </h6>
          <p className="text-xs text-white/30 font-extralight m-0 pt-1">
            {props.time}
          </p>
        </div>
      </div>
      <p className="text-white/60 text-base">{props.children}</p>
    </a>
  );
};

export default Testimonial;
