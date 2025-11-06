import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';

/**
 * Loads Montserrat font variants and indicates when they are available.
 *
 * Loads Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, and Montserrat_700Bold.
 *
 * @returns `true` if the Montserrat font variants have finished loading, `false` otherwise.
 */
export function useFont() {
  const [hasFontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return hasFontsLoaded;
}