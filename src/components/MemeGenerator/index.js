import {Component} from 'react'
import {
  Heading,
  Label,
  InputContainer,
  FormContainer,
  InputField,
  SelectInput,
  GenerateButton,
  AppContainer,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
    })
  }

  render() {
    const {
      topText,
      bottomText,
      activeFontSizeOptionId,
      backgroundImageUrl,
    } = this.state
    return (
      <AppContainer className="app-container">
        <FormContainer
          className="form-container"
          onSubmit={this.onGenerateMeme}
        >
          <Heading>Meme Generator</Heading>
          <br />
          <InputContainer>
            <Label htmlFor="imageInput">Image URL</Label>
            <InputField
              id="imageInput"
              type="text"
              placeholder="Enter the image URL"
              onChange={this.onChangeBackgroundImage}
              value={this.backgroundImageUrlInput}
            />
          </InputContainer>
          <br />
          <InputContainer>
            <Label htmlFor="topText">Top Text</Label>
            <InputField
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopTextInput}
              value={this.topTextInput}
            />
          </InputContainer>
          <br />
          <InputContainer>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <InputField
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomTextInput}
              value={this.bottomTextInput}
            />
          </InputContainer>
          <br />
          <InputContainer>
            <Label htmlFor="fontSize">Font Size</Label>
            <SelectInput
              id="fontSize"
              onChange={this.onChangeFontSizeOptionId}
              value={this.activeFontSizeOptionId}
            >
              {fontSizesOptionsList.map(fontsize => (
                <option key={fontsize.optionId} value={fontsize.optionId}>
                  {fontsize.displayText}
                </option>
              ))}
            </SelectInput>
          </InputContainer>
          <br />
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
          <TextContent activeFontSizeId={activeFontSizeOptionId}>
            {topText}
          </TextContent>
          <TextContent activeFontSizeId={activeFontSizeOptionId}>
            {bottomText}
          </TextContent>
        </MemeContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
