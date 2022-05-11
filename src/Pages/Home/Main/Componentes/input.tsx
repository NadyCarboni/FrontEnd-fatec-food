import Search from "antd/lib/input/Search";
import React from "react";

export default function input() {
  const onSearch = (value: string) => console.log(value);

  return (
    <div>
      <Search
        addonBefore="https://"
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 304 }}
      />
    </div>
  );
}
