import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Layout, Breadcrumb, Input, DatePicker } from "antd";

const { Content } = Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
`;

const Div = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-right: 30px;
  width: 100px;
`;

const Inputs = styled(Input)`
  width: 300px;
  height: 30px;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
`;

const CoachForm = ({ coachForm, handleChange, handleDateChange }) => (
  <>
    <Content style={{ margin: "0 auto" }}>
      <Breadcrumb style={{ margin: "30px 0" }}>
        <Breadcrumb.Item
          style={{
            fontSize: "18px",
            fontWeight: 600,
            marginLeft: "30px",
          }}
        >
          [ 코치 등록 ]
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Div>이름</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="name"
          value={coachForm.name}
          onChange={(e) => handleChange(e)}
        />
      </Container>
      <Container>
        <Div>생년월일</Div>
        <DatePicker
          name="birthday"
          value={
            coachForm.birthday === ""
              ? coachForm.birthday
              : moment(coachForm.birthday, "YYYY-MM-DD")
          }
          onChange={handleDateChange}
        />
      </Container>
      <Container>
        <Div>연락처</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="contact"
          value={coachForm.contact}
          onChange={(e) => handleChange(e)}
        />
      </Container>
    </Content>
  </>
);

export default CoachForm;
