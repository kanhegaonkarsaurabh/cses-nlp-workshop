import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconImageLeft = styled.img`
  max-height: 250px;
  max-width: 250px;
  margin-right: 200px;
`

const IconImageRight = styled.img`
  max-height: 250px;
  max-width: 250px;
  margin-left: 200px;
`

function LinkedIconImage({link, name, dir}) {
  if (dir == 'l') {
    return (
    <a href={link} target="_blank">
      <IconImageLeft src={`public/standard/${name}`} />
    </a>
    )
  } else {
    return (
    <a href={link} target="_blank">
      <IconImageRight src={`public/standard/${name}`} />
    </a>
  )
  }
  
}

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Family = styled.div`
  display: flex;
`

const LogoRow = styled(Container)`
  margin-top: 10px;
  margin-bottom: 10px;
`

function Examples() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
    <AboutMe />
    </div>
  )
}

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <LogoRow>
          <LinkedIconImage
            link="https://messengerdevelopers.com/"
            name="messenger-bots.png"
            dir="l"
          />
          <LinkedIconImage link="https://ai.googleblog.com/2018/05/duplex-ai-system-for-natural-conversation.html" name="google_duplex.jpg" dir="r"/>
        </LogoRow>
      </div>
    )
  }
}

export {Examples}