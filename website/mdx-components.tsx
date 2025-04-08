// components/mdx-components.tsx
import React, { ComponentPropsWithoutRef, useState } from "react";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Copy, Check } from "lucide-react";
import { Pre } from "./pre";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Headings
    h1: (props: HeadingProps) => (
      <h1
        className="text-3xl font-bold tracking-tight scroll-m-20 mb-6 mt-10 text-neutral-900 dark:text-neutral-100 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),
    h2: (props: HeadingProps) => (
      <h2
        className="text-2xl font-semibold tracking-tight scroll-m-20 mt-10 mb-4 text-neutral-900 dark:text-neutral-100 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),
    h3: (props: HeadingProps) => (
      <h3
        className="text-xl font-medium tracking-tight scroll-m-20 mt-8 mb-3 text-neutral-900 dark:text-neutral-100 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),
    h4: (props: HeadingProps) => (
      <h4
        className="text-lg font-semibold scroll-m-20 mt-6 mb-2 text-neutral-900 dark:text-neutral-100 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),

    // Paragraph
    p: (props: ParagraphProps) => (
      <p
        className="text-base leading-7 text-neutral-700 dark:text-neutral-300 mb-4 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),

    // Lists
    ul: (props: ListProps) => (
      <ul
        className="list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),
    ol: (props: ListProps) => (
      <ol
        className="list-decimal pl-5 mb-4 text-neutral-700 dark:text-neutral-300 max-w-[90vw] md:max-w-screen-md"
        {...props}
      />
    ),
    li: (props: ListItemProps) => <li className="mb-1" {...props} />,

    // Anchor links
    a: (props: AnchorProps) => (
      <Link
        className="text-blue-600 hover:underline font-medium"
        href={props.href ?? "#"}
      >
        {props.children}
      </Link>
    ),

    // Pre
    pre: (props: PreProps) => <Pre {...props} />,

    // Inline code
    code: ({ children, ...props }: CodeProps) => (
      <code
        className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-1 rounded text-sm font-mono text-pink-600 break-words whitespace-pre-wrap"
        {...props}
      >
        {children}
      </code>
    ),

    // Buttons inside MDX
    button: (props) => (
      <button
        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
        {...props}
      />
    ),
  };
}
