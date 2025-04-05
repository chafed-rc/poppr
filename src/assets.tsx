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
  default: <HelpCircle className="poppr-icon muted" />,
  info: <Info className="poppr-icon info" />,
  success: <CheckCircle className="poppr-icon success" />,
  warning: <AlertTriangle className="poppr-icon warning" />,
  error: <XCircle className="poppr-icon error" />,
  confirm: <HelpCircle className="poppr-icon primary" />,
  loading: <Loader2 className="poppr-icon muted spin" />,
};
