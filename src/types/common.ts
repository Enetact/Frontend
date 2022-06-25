import type { ReactNode } from 'react';

export type WithChildren = { children: ReactNode };
export type TProvider<T = unknown> = (props: T & WithChildren) => JSX.Element | null;
export type DropdownItems = { title: string; link?: string };
export type ReactElement = JSX.Element | JSX.Element[] | string | number | boolean;
export type PageLink = { title: string; to: string; isActive?: boolean };
