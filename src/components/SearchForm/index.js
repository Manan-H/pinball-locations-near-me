import React from "react";
import Button from "../Button";
import { Form } from "antd";
import InputNumber from "../InputNumber";

const SearchForm = ({ handleSearch }) => {
  const [form] = Form.useForm();

  return (
    <Form
      id="searchForm"
      form={form}
      layout={"vertical"}
      labelAlign={"left"}
      onFinish={(data) => handleSearch(data)}
    >
      <Form.Item label="Longitude" name="longitude">
        <InputNumber placeholder="input longitude" />
      </Form.Item>
      <Form.Item label="Latitude" name="latitude">
        <InputNumber placeholder="input latitude" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
