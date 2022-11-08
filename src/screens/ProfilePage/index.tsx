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
  FollowButton,
  FollowersAndAvatarContainer,
  FollowersButton,
  GalleryFeed,
  Header,
  HeaderButtonsContainer,
  IconsContainer,
  ImageGalleryContainer,
  Label,
  NameAndBioContainer,
  Post,
  Title,
} from "./styles";
import { PostImageType } from "../../components/PostImageType";
import { PostTextType } from "../../components/PostTextType";
import { Repost } from "../../components/Repost/Index";
import { ImagesGallery } from "../../components/ImagesGallery";
import { useAuth } from "../../hooks/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { ImageInfo } from "expo-image-picker";
import { Alert } from "react-native";

interface Props {
  userId: string;
}

export function ProfilePage({ userId }: Props) {
  const theme = useTheme();
  const { user } = useAuth();
  //States
  const [showFeed, setShowFeed] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [avatarImage, setAvatarImage] = useState("");
  const [name, setName] = useState("");

  //Functions
  async function handleChangeAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    }) as ImageInfo;

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
          setAvatarImage(url);

          await firestore()
            .collection("users")
            .doc(user.id)
            .update({ avatarUrl: url });
        })
        .catch((error) => console.error(error));
    }
  }

  function handleChangeCover() {}
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
        });
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Header>
        <Cover>
          <ImageComponent
            source={{ uri: "https://picsum.photos/500/300?" }}
          ></ImageComponent>
        </Cover>
        <FollowersAndAvatarContainer>
          <FollowersButton>
            <Title style={{ alignSelf: "flex-end" }}>364</Title>
            <Label style={{ alignSelf: "flex-end" }}>Following</Label>
          </FollowersButton>
          <AvatarContainer onPress={handleChangeAvatar}>
            <Avatar avatarUrl={avatarImage} radius={25} size={100} />
          </AvatarContainer>
          <FollowersButton>
            <Title style={{ alignSelf: "flex-start" }}>364</Title>
            <Label style={{ alignSelf: "flex-start" }}>Followers</Label>
          </FollowersButton>
        </FollowersAndAvatarContainer>
        <NameAndBioContainer>
          <Title>{name}</Title>
          <Label>A bio vai aqui, em algumas palavras. Sutil</Label>
        </NameAndBioContainer>

        <HeaderButtonsContainer>
          <FollowButton style={{ backgroundColor: theme.COLORS.SUCCESS_900 }}>
            <ButtonText>Follow</ButtonText>
          </FollowButton>
          <FollowButton>
            <ButtonText>Message</ButtonText>
          </FollowButton>
        </HeaderButtonsContainer>
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
      {showFeed && (
        <Feed>
          {/* <Post>
            <PostImageType screenType="small" />
          </Post>
          <Post>
            <PostTextType screenType="small" />
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post>
          <Post>
            <PostTextType screenType="small" />
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post>
          <Post>
            <Repost postType="text" screenType="small" />
          </Post>
          <Post>
            <Repost postType="image" screenType="small" />
          </Post> */}
        </Feed>
      )}
      {showGallery && (
        <GalleryFeed>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=1" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=2" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=3" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/500?random=4" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=5" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=6" />
          </ImageGalleryContainer>
          <ImageGalleryContainer>
            <ImagesGallery imgSource="https://picsum.photos/500/300?random=7" />
          </ImageGalleryContainer>
        </GalleryFeed>
      )}
    </Container>
  );
}
