import React, { useState, useEffect } from 'react';

import { Text, Image, View, StyleSheet } from 'react-native';

const people = {
  0: {
    name: 'Leela',
    image: 'https://vignette1.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044',
  },
  1: {
    name: 'Bender',
    image: 'https://vignette2.wikia.nocookie.net/en.futurama/images/4/43/Bender.png/revision/latest?cb=20150206072725',
  },
  2: {
    name: 'Amy',
    image: 'https://i.ytimg.com/vi/4sCtTq7K3yI/hqdefault.jpg',
  },
  3: {
    name: 'Fry',
    image: 'https://68.media.tumblr.com/6407f6763cc78a289ee88160838a29b4/tumblr_nqdq8jkmTS1uz53k3o1_400.jpg',
  }
}

const People = ({ route, navigation }) => {
  const [id_, setId_] = useState("");

  useEffect(() => {
    console.log("people page getparams", route.params.id)
    setId_(route.params.id)
  }, [])

  if (!people[id_]) return <Text>Sorry, no data</Text>
  return (
    <View>
      <Text style={styles.text}>{people[id_].name}</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: people[id_].image }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    margin: 19,
    fontSize: 22,
  },
  image: {
    width: 400,
    height: 400,
  },
})

export default People;
