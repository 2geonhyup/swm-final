"use client";

import { Text, Space, Box } from '@mantine/core';
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import { useState, useEffect } from 'react';
import PromptForm from './components/PromptForm';
import ResponseDisplay from './components/ResponseDisplay';
import fetchGPTResponse from './components/fetchGPTResponse';

const article = `플라톤은 초월 세계인 이데아계와 감각 세계인 현상계를 구분했다. 영원불변의 이데아계는 현상계에 나타난 모든 사물의 근본이 되는 보편자, 즉 형상(form)이 존재하는 곳으로 이성으로만 인식될 수 있는 관념의 세계이다. 반면 현상계는 이데아계의 형상을 바탕으로 만들어진 세계로 끊임없이 변화하는 사물이 감각에 의해 지각된다. 플라톤에 따르면 현상계의 모든 사물은 형상을 본뜬 그림자에 불과하다.
이러한 관점에서 플라톤은 예술을 감각 가능한 현상의 모방이라고 보았다. 예를 들어 목수는 이성을 통해 침대의 형상을 인식하고 그것을 모방하여 침대를 만든다. 그리고 화가는 감각을 통해 이 침대를 보고 그림을 그린다. 결국 침대 그림은 보편자에서 두 단계 떨어져 있는 열등한 것이며, 형상에 대한 참된 인식을 방해하는 허구의 허구에 불과하다. 이데아계의 형상을 모방하여 생겨난 것이 현상인데, 예술은 현상을 다시 모방한 것이기 때문이다.
`;



export default function HomePage() {
  const [responses, setResponses] = useState([]);

  const handleFormSubmit = async (prompt: string) => {
    for (let i = 0; i < 10; i++) {
      const response = await fetchGPTResponse(prompt);
      setResponses(prevResponses => [...prevResponses, response]);
    }
  };

  // responses 상태가 변경될 때마다 실행될 useEffect
  useEffect(() => {
    // 여기에 필요한 로직을 추가할 수 있습니다.
    // 예를 들어, 스크롤을 최신 응답으로 이동시키거나, 다른 UI 업데이트를 수행할 수 있습니다.
  }, [responses]);

  return (
    <Box m={30}>

      <h1>요약 테스트</h1>
      <Box mb={30}>{article}</Box>
      <PromptForm onSubmit={handleFormSubmit} />
      {responses.map((response, index) => (
        <div>
        <ResponseDisplay key={index} index={index + 1} response={response["1"]} type={1} />
        <Space h={10} />
        <ResponseDisplay key={index} index={index + 1} response={response["2"]} type={2} />
        <Space h={80} />
        </div>
      ))}
    </Box>
  );
}
