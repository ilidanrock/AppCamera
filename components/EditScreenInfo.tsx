import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Text, View } from './Themed';
import { EditScreenInfoStyles } from "../components/styles/EditScreenInfo"
import { AntDesign } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

export default function EditScreenInfo({ path }: { path: string }) {
  const [uri, setUri] = useState<{ uri: string; uriFormated: string }>({ uri: "", uriFormated: "" })

  const { containerPickIcons, buttonPickerImage, containerPickPhoto } = EditScreenInfoStyles

  const selectImage = async () => {
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75
    };


    await ImagePicker.requestCameraPermissionsAsync();
    result = await ImagePicker.launchCameraAsync(options);

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri: string) => {
    console.log(`
      saveImage: ${uri},
      fortmat: ${uri.split('/')[uri.split('/').length - 1]}
    `);
    setUri({ uri: uri, uriFormated: uri.split('/')[uri.split('/').length - 1] })
    await ensureDirExists();
    const filename = new Date().getTime() + '.jpg';
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });



    /*     scalable.setValueImage(dest?.split('/')[dest?.split('/').length - 1]); */
  };

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <View style={containerPickIcons}>
          <View
          >
            <Text>URI: {uri.uri}</Text>
            <Text>URIFORMATED: {uri.uriFormated}</Text>
          </View>

          <View style={{ marginTop: 4 }}>
            <Pressable
              style={buttonPickerImage}
              onPress={() => {
                console.log('press');
                selectImage()
              }}>
              <View style={containerPickPhoto}>
                <AntDesign name="camera" size={24} color="black" />
                <Text style={{ fontSize: 16 }}>Take a Photo</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ flex: 1, marginTop: 4 }}>
            {uri.uri && <Image source={{ uri: uri.uri }} style={{ width: 200, height: 200 }} />}
          </View>

        </View>
      </View>
    </View>
  );
}
