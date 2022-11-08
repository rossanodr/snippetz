import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { useTheme } from "styled-components/native";
import { Avatar } from "../../components/Avatar";
import { ImageComponent } from "../../components/ImageComponent";
import { Ionicons } from "@expo/vector-icons";
import {
  AvatarContainer,
  ButtonText,
  Container,
  Cover,
  Feed,
  Button,
  FollowersAndAvatarContainer,
  FollowersButton,
  GalleryFeed,
  Header,
  HeaderButtonsContainer,
  IconsContainer,
  ImageGalleryContainer,
  Label,
  ModalCenteredView,
  ModalView,
  NameAndBioContainer,
  Title,
  ModalButton,
  ModalCover,
  PostContainer,
} from "./styles";
import { ImagesGallery } from "../../components/ImagesGallery";
import { useAuth } from "../../hooks/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { ImageInfo } from "expo-image-picker";
import { Alert, Modal, Pressable, ActivityIndicator } from "react-native";
import { Input } from "../../components/Input";
import { BlurView } from "expo-blur";
import { FlatList } from "react-native-gesture-handler";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
import { Post } from "../../components/Post";

type Posts = {
  id: string;
};

export function MyProfileScreen() {
  const theme = useTheme();
  const navigation = useTypeNavigation();
  const { user } = useAuth();
  //States
  const [postsId, setPostsId] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  const [showFeed, setShowFeed] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [avatarImage, setAvatarImage] = useState("");
  const [newAvatarImage, setNewAvatarImage] = useState("");

  const [coverImage, setCoverImage] = useState(
    "https://picsum.photos/500/300?"
  );
  const [newCoverImage, setNewCoverImage] = useState("");

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  async function buildTheFeed() {
    await firestore()
      .collection("users")
      .doc(user.id)
      .collection("posts")
      .get()
      .then((res) => {
        const data = res.docs.map((posts) => {
          return {
            id: posts.id,
          };
        });
        setPostsId(data);
      });
  }

  //Functions
  async function handleChangeAvatar() {
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })) as ImageInfo;

    if (!result.cancelled) {
      //upload the avatarImage to the database, set the image to the userCollecion and display it
      const fileName = new Date().getTime();
      const MIME = result.uri.match(/\.(?:.(?!\.))+$/);
      const reference = storage().ref(`/images/${fileName}${MIME}`);

      reference
        .putFile(result.uri)
        .then(async () => {
          Alert.alert("Deu bom");
          const url = await storage()
            .ref(`/images/${fileName}${MIME}`)
            .getDownloadURL();
          setNewAvatarImage(url);
          console.log(newAvatarImage)

        })
        .catch((error) => console.error(error));
    }
  }

  async function handleChangeCover() {
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,

      quality: 1,
    })) as ImageInfo;

    if (!result.cancelled) {
      //upload the avatarImage to the database, set the image to the userCollecion and display it
      const fileName = new Date().getTime();
      const MIME = result.uri.match(/\.(?:.(?!\.))+$/);
      const reference = storage().ref(`/images/${fileName}${MIME}`);

      reference
        .putFile(result.uri)
        .then(async () => {
          const url = await storage()
            .ref(`/images/${fileName}${MIME}`)
            .getDownloadURL();
          setNewCoverImage(url);
        })
        .catch((error) => console.error(error));
    }
  }

  async function handleChangeProfile() {
    setLoading(true);
    try {
      if (name) {
        console.log('change name')
        await firestore().collection("users").doc(user.id).update({
          name,
        });
      }
      if (bio) {
        console.log('change bio')

        await firestore().collection("users").doc(user.id).update({
          bio,
        });

        if (newCoverImage) {
        console.log('change newCover')

          await firestore()
            .collection("users")
            .doc(user.id)
            .update({ coverImageUrl: newCoverImage });
          setCoverImage(newCoverImage);
        }

        if (newAvatarImage) {
        console.log('change avatar')

          await firestore()
            .collection("users")
            .doc(user.id)
            .update({ avatarUrl: newAvatarImage });
          setAvatarImage(newAvatarImage);
        }
      }
    } catch (error) {
      Alert.alert("Ops", error);
    } finally {
      setModalVisible(!modalVisible);
      setLoading(false);
    }
  }
  //Functions for changing the content
  function handleShowFeed() {
    if (showGallery) {
      setShowGallery(false);
    }
    setShowFeed(true);
  }
  function handleShowGallery() {
    if (showFeed) {
      setShowFeed(false);
    }
    setShowGallery(true);
  }

  function handleGoToPicture(source: string) {
    navigation.navigate("PhotoScreen", {
      source,
    });
  }

  //UseEffects

  useEffect(() => {
    const fetchData = async () => {
      await firestore()
        .collection("users")
        .doc(user.id)
        .get()
        .then((res) => {
          setAvatarImage(res.data().avatarUrl);
          setName(res.data().name);
          setBio(res.data().bio);
        });
    };
    fetchData();
  }, [modalVisible]);

  useEffect(() => {
    buildTheFeed();
  }, [refreshing]);

  return (
    <Container>
      <FlatList
        data={postsId}
        onRefresh={() => setRefreshing(true)}
        refreshing={refreshing}
        contentContainerStyle={{
          width: "100%",
          paddingBottom: 90
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Header onPress={() => handleGoToPicture(coverImage)}>
            <Cover>
              <ImageComponent
                source={{
                  uri: coverImage
                    ? coverImage
                    : "https://picsum.photos/500/300?",
                }}
              ></ImageComponent>
            </Cover>
            <FollowersAndAvatarContainer>
              <FollowersButton>
                <Title style={{ alignSelf: "flex-end" }}>364</Title>
                <Label style={{ alignSelf: "flex-end" }}>Following</Label>
              </FollowersButton>
              <AvatarContainer onPress={() => handleGoToPicture(avatarImage)}>
                <Avatar avatarUrl={avatarImage} radius={25} size={100} />
              </AvatarContainer>
              <FollowersButton>
                <Title style={{ alignSelf: "flex-start" }}>364</Title>
                <Label style={{ alignSelf: "flex-start" }}>Followers</Label>
              </FollowersButton>
            </FollowersAndAvatarContainer>
            <NameAndBioContainer>
              <Title>{name}</Title>
              <Label>{bio}</Label>
            </NameAndBioContainer>

            <HeaderButtonsContainer>
              <Button style={{ backgroundColor: theme.COLORS.SUCCESS_900 }}>
                <ButtonText>Follow</ButtonText>
              </Button>
              <Button onPress={() => setModalVisible(true)}>
                <ButtonText>Edit Profile</ButtonText>
              </Button>
            </HeaderButtonsContainer>

            {/* Tabs */}

            <IconsContainer>
              <Ionicons
                name="ios-albums-outline"
                size={28}
                color={theme.COLORS.BACKGROUND_SECONDARY}
                onPress={handleShowFeed}
              />
              <Ionicons
                name="add-circle"
                size={28}
                color={theme.COLORS.BACKGROUND_SECONDARY}
                onPress={handleShowGallery}
              />
              <Ionicons
                name="aperture-sharp"
                size={28}
                color={theme.COLORS.BACKGROUND_SECONDARY}
              />
              <Ionicons
                name="barcode-outline"
                size={28}
                color={theme.COLORS.BACKGROUND_SECONDARY}
              />
            </IconsContainer>
          </Header>
        }
        ListHeaderComponentStyle={{
          height: 400,
          marginBottom: 10,
        }}
        renderItem={({ item }) => (
          <Feed>
            {showFeed && (
              <PostContainer>
                <Post screenType="small" postId={item.id} isRepost={false} />
              </PostContainer>
            )}

            {showGallery && (
              <GalleryFeed>
                <ImageGalleryContainer>
                  <ImagesGallery imgSource="https://picsum.photos/500/300?random=1" />
                </ImageGalleryContainer>
               
              </GalleryFeed>
            )}
          </Feed>
        )}
      />

      {/* Profile edit */}
      <ModalCenteredView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ModalCenteredView>
            <ModalView>
              <ModalCover onPress={handleChangeCover}>
                <ImageComponent
                  source={{
                    uri: newCoverImage ? newCoverImage : coverImage,
                  }}
                >
                  <BlurView>
                    <Title>Change Cover</Title>
                  </BlurView>
                </ImageComponent>
              </ModalCover>
              <Pressable
                onPress={handleChangeAvatar}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <AvatarContainer>
                  <Avatar avatarUrl={avatarImage} radius={20} size={70} />
                </AvatarContainer>
                <Title>Change Profile Picture</Title>
              </Pressable>
              <Input placeholder={name} value={name} onChangeText={setName} />
              <Input placeholder={bio} value={bio} onChangeText={setBio} />
              {loading ? (
                <ActivityIndicator />
              ) : (
                <HeaderButtonsContainer>
                  <ModalButton
                    onPress={() => setModalVisible(false)}
                    style={{ backgroundColor: theme.COLORS.ALERT_900 }}
                  >
                    <ButtonText>Cancel</ButtonText>
                  </ModalButton>

                  <ModalButton
                    style={{ backgroundColor: theme.COLORS.SUCCESS_900 }}
                    onPress={handleChangeProfile}
                  >
                    <ButtonText>Save</ButtonText>
                  </ModalButton>
                </HeaderButtonsContainer>
              )}
            </ModalView>
          </ModalCenteredView>
        </Modal>
      </ModalCenteredView>
    </Container>
  );
}
