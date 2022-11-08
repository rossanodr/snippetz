import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constants from "expo-constants";
import { BlurView } from "expo-blur";

export const Container = styled.View
// .ScrollView.attrs({
//   showsVerticalScrollIndicator: false,
//   width: "100%",
//   contentContainerStyle: {
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   flex: 1,
// })
`
  border-radius: 36px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  overflow: hidden;
  margin-bottom: -200px;
`;

export const FollowersAndAvatarContainer = styled(BlurView).attrs({
  intensity: 30,
  tint: "default",
})`
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding-top: 145px;
  margin-bottom: 10px;
`;

export const AvatarContainer = styled(RectButton)`
  margin: 0 25px;
`;
export const FollowersButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

  font-size: 14px;
  margin-top: 5px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

  font-size: 12px;
`;

export const NameAndBioContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom: 10px;
`;

export const HeaderButtonsContainer = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  width: 40%;
  border-radius: 30px;
`;
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 14px;
  padding: 5px 10px;
`;

export const IconsContainer = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  padding: 5px 0;
`;

export const Feed = styled.View`
  width: 100%;
`;

export const PostContainer = styled.View`
  width: 97%;
  

  align-self: center;

margin-bottom: 16px;
  border-radius: 39px;
`;


export const Post = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const GalleryFeed = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-direction: row;
`;
export const ImageGalleryContainer = styled.View`
  width: 47%;

  height: 333px;
  margin: 5px;
`;

export const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 97%;
  
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;
export const ModalButton = styled.Pressable`
justify-content: center;
  align-items: center;


  width: 40%;
  border-radius: 30px;
`;

export const ModalCover = styled.Pressable`
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  overflow: hidden;

  margin-bottom: 10px;
  
`;