import { useState } from 'react';
import { TextInput, Button, Textarea } from '@mantine/core';

export default function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="요약을 입력하세요"
      />
      <Button mt="md" mb="md" type="submit">Submit</Button>
    </form>
  );
}

// import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
// import { IconSearch, IconArrowRigh, Button } from '@tabler/icons-react';
// import { useState } from 'react';

// export default function PromptForm({onSubmit}) {
//   const [prompt, setPrompt] = useState('');

//     const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(prompt);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//     <TextInput
//       value={prompt}
//       onChange={(e) => setPrompt(e.target.value)}
//       radius="xl"
//       size="md"
//       placeholder="요약하기"
//       rightSectionWidth={42}
//       leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
//       rightSection={
//         <Button type="submit" mt="sm">
//           Submit
//         </Button>
//       }
//     />
//     </form>
//   );
// }
