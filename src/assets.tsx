import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Loader2,
} from "lucide-react";
import type { ModalTypes } from "./types";
import "./styles.css";

export const ModalIcons: Record<ModalTypes, React.ReactNode> = {
  default: <HelpCircle className="h-6 w-6 text-muted-foreground" />,
  info: <Info className="h-6 w-6 text-blue-500" />,
  success: <CheckCircle className="h-6 w-6 text-green-500" />,
  warning: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
  error: <XCircle className="h-6 w-6 text-red-500" />,
  confirm: <HelpCircle className="h-6 w-6 text-primary" />,
};

export const ModalLoadingIcon = (
  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
);
