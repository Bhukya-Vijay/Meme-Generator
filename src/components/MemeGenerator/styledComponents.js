import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: 'Open Sans';
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Heading = styled.h1`
  color: #35469c;
`
export const Label = styled.label`
  color: #7e858e;
  padding-bottom: 5px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputField = styled.input`
  border: 1px solid #d7dfe9;
  height: 30px;
  border-radius: 2px;
  padding-left: 10px;
`

export const FormContainer = styled.form`
  width: 30vw;
  padding: 20px;
`
export const SelectInput = styled.select`
  height: 30px;
  border: 1px solid #d7dfe9;
`
export const GenerateButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #0b69ff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 400px;
  width: 400px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextContent = styled.p`
  font-size: ${props => props.activeFontSizeId}px;
  color: white;
`
