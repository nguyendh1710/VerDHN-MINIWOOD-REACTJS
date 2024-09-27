
import styled from 'styled-components';












export const ContactForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  input, textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:focus {
      border-color: #dcc6a5;
      box-shadow: 0 0 5px rgba(8, 143, 245, 0.2);
    }
  }
`;
export const ContactInfo = styled("div")`
  margin-top: 24px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const SocialLinks = styled("div")`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;