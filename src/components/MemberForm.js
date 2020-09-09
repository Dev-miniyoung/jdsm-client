import React from "react";
import styled from "styled-components";

import { Layout, Breadcrumb, Input, Select } from "antd";

const { Content } = Layout;
const { Option } = Select;

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

const Selects = styled(Select)`
  width: 300px;
  font-size: 14px;
  color: #9b9b9b;
  border: none;
  border-radius: 0.4rem;
`;

const MemberForm = ({
  userForm,
  handleChange,
  handleSelect,
  handleSubmit,
  lessons,
  select,
}) => (
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
          [ 회원 등록 ]
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Div>이름</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="이름"
          value={userForm.name}
          onChange={(e) => handleChange(e)}
        />
      </Container>
      <Container>
        <Div>학교</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="학교"
          value={userForm.school}
          onChange={(e) => handleChange(e)}
        />
      </Container>
      <Container>
        <Div>학년</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="학년"
          value={userForm.grade}
          onChange={(e) => handleChange(e)}
        />
      </Container>
      <Container>
        <Div>연락처</Div>
        <Inputs
          placeholder="내용을 입력해주세요"
          name="연락처"
          value={userForm.contact}
          onChange={(e) => handleChange(e)}
        />
      </Container>
      <Container>
        <Div>레슨</Div>
        <Selects name="레슨" placeholder="레슨 선택" onChange={handleSelect}>
          {lessons.map((lesson, index) => (
            <Option value={lesson.lessonName} key={index}>
              {lesson["레슨이름"]}
            </Option>
          ))}
        </Selects>
      </Container>
    </Content>
  </>
);

export default MemberForm;
