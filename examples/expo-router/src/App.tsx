import { TamaguiProvider } from '@tamagui/core'
import { ExpoRoot } from '@vxrn/expo-router'

import { config } from './tamagui.config'
import { useExpoContext } from './useExpoContext'

// @ts-ignore
const modules = import.meta.glob('../app/**/*.tsx')

export function App() {
  const context = useExpoContext(modules)

  if (!context) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <ExpoRoot context={context} />
      {/* <Stack gap="$5" f={1} bg="limegreen" jc="center" p="$8" height="100%">
        <Text ta="center" fontSize={50} col="#9DFFC8" fow="bold">
          👋
        </Text>
      </Stack> */}
    </TamaguiProvider>
  )
}
