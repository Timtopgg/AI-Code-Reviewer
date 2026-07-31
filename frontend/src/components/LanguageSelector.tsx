import Select from "react-select";
import type { StylesConfig } from "react-select";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type LanguageSelectorProps = {
  language: string;
  onLanguageChange: (language: string) => void;
};

type LanguageOption = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const languages: LanguageOption[] = [
  {
    value: "python",
    label: "Python",
    icon: <SiPython color="#3776AB" />,
  },
  {
    value: "javascript",
    label: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" />,
  },
  {
    value: "typescript",
    label: "TypeScript",
    icon: <SiTypescript color="#3178C6" />,
  },
  {
    value: "java",
    label: "Java",
    icon: <FaJava color="#F89820" />,
  },
  {
    value: "cpp",
    label: "C++",
    icon: <SiCplusplus color="#00599C" />,
  },
  {
    value: "dart",
    label: "Dart",
    icon: <SiDart color="#0175C2" />,
  },
];

const customStyles: StylesConfig<LanguageOption, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#1e1e1e",
    borderColor: state.isFocused ? "#007acc" : "#3c3c3c",
    boxShadow: "none",
    minHeight: "45px",
    cursor: "pointer",

    "&:hover": {
      borderColor: "#007acc",
    },
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#1e1e1e",
    border: "1px solid #3c3c3c",
  }),

  menuList: (base) => ({
    ...base,
    backgroundColor: "#1e1e1e",
    padding: 0,
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#0e639c"
      : state.isFocused
      ? "#094771"
      : "#1e1e1e",
    color: "#ffffff",
    cursor: "pointer",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#ffffff",
  }),

  input: (base) => ({
    ...base,
    color: "#ffffff",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#cccccc",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#cccccc",

    "&:hover": {
      color: "#ffffff",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

function LanguageSelector({
  language,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <Select<LanguageOption, false>
      styles={customStyles}
      classNamePrefix="language"
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          neutral0: "#1e1e1e",
          neutral5: "#1e1e1e",
          neutral10: "#1e1e1e",
          neutral20: "#3c3c3c",
          neutral30: "#007acc",
          neutral80: "#ffffff",
          primary: "#007acc",
          primary25: "#094771",
        },
      })}
      value={languages.find((lang) => lang.value === language)}
      onChange={(selected) => {
        if (selected) {
          onLanguageChange(selected.value);
        }
      }}
      options={languages}
      formatOptionLabel={(option) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {option.icon}
          <span>{option.label}</span>
        </div>
      )}
    />
  );
}

export default LanguageSelector;