import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export interface IReactSelectType {
  value: string | number;
  label: string | ReactNode;
  optional?: any;
}

export interface IErrorCode {
  errorMessage: string;
  toast: boolean;
  auditLogMessage?: null;
  displayMessage?: string;
  errorCode?: string;
  errorCodeId?: string;
}

export type FormErrorType =  string | ReactElement<unknown, string | JSXElementConstructor<unknown>> | undefined