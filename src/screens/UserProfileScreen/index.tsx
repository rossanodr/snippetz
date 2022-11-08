import React, { useEffect, useState } from "react";

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
  NameAndBioContainer,
  Title,
  PostContainer,
} from "./styles";
import { ImagesGallery } from "../../components/ImagesGallery";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from "react-native-gesture-handler";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
import { Post } from "../../components/Post";
import { useRoute } from "@react-navigation/native";

type Posts = {
  id: string;
};
interface Params {
  userId: string;
}

export function UserProfileScreen() {
  const theme = useTheme();
  const navigation = useTypeNavigation();
  const route = useRoute();
  const { userId } = route.params as Params;
  //States
  const [postsId, setPostsId] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  const [showFeed, setShowFeed] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [avatarImage, setAvatarImage] = useState("");

  const [coverImage, setCoverImage] = useState(
    "https://picsum.photos/500/300?"
  );

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  async function buildTheFeed() {
    setLoading(true);
    await firestore()
      .collection("users")
      .doc(userId)
      .collection("posts")
      .get()
      .then((res) => {
        const data = res.docs.map((posts) => {
          return {
            id: posts.id,
          };
        });
        setPostsId(data);
      })
      .finally(() => setLoading(false));
  }

  //Functions
  function handleGoToPicture(source: string) {
    navigation.navigate("PhotoScreen", {
      source,
    });
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

  //UseEffects

  useEffect(() => {
    const fetchData = async () => {
      await firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then((res) => {
          setAvatarImage(res.data().avatarUrl);
          setName(res.data().name);
          setBio(res.data().bio);
          setCoverImage(res.data().coverImageUrl);
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
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Header>
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
                <ButtonText>Message</ButtonText>
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
          </Feed>
        )}
      />
    </Container>
  );
}
