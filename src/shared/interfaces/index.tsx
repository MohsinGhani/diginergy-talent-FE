import { ReactNode } from "react";
import {
  ButtonProps,
  DatePickerProps,
  InputProps,
  ModalProps,
  SelectProps,
  SwitchProps,
  TableProps,
} from "antd";
import dayjs from "dayjs";

export interface AuthCardsProps {
  title: string;
  subtitle?: string;
  fields: {
    label: string;
    name: string;
    requiredMessage: string;
  }[];
  buttonText: string;
  handleSubmit: () => void;
  forgotPassword?: boolean;
}

export interface CommonButtonProps extends ButtonProps {
  type?: "primary" | "dashed" | "link" | "text" | "default";
  onClick?: () => void;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  classes?: string;
}

export interface CommonDatePickerProps extends DatePickerProps {
  onChange?: (date: dayjs.Dayjs, dateString: string | string[]) => void;
  placeholder?: string;
  format?: string;
}

export interface CommonInputProps extends InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  size?: "large" | "middle" | "small";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  visibilityToggle?: boolean;
  allowClear?: boolean;
}

export interface CommonModalProps extends ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
  children: ReactNode;
  okText?: string;
  cancelText?: string;
}

interface OptionType {
  value: string | number;
  label: string;
}

export interface CommonSelectProps extends SelectProps {
  options: OptionType[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  allowClear?: boolean;
  disabled?: boolean;
}

export interface CommonSwitchProps extends SwitchProps {
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  checked?: boolean;
}

export interface CommonTableProps<T = Record<string, unknown>>
  extends TableProps<T> {
  columns: TableProps<T>["columns"];
  data: T[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
  pageSize?: number;
  tableTitle?: string | null;
  handleAddButtonClick?: () => void;
  onFilterChange: (value: string) => void;
  onSearch?: (value: string) => void;
}

export interface CommonTypographyProps {
  type?: "title" | "text" | "paragraph" | "link";
  children: ReactNode;
  classes?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}
