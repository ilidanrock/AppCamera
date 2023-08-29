import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

export const EditScreenInfoStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    top: 20
  },
  iconBackContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  iconBack: {
    width: 30,
    height: 30,
    top: 10,
    left: 5
  },
  logoContainer: {
    backgroundColor: 'white',
    height: 80,
    width: 100,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  logoOptec: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  containerLists: {
    alignItems: 'center',
    height: Layout.window.height - 150
  },
  containerIconDown: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center'
  },
  iconDownArrow: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  titleContainer: {
    top: -20,
    width: '100%',
    alignItems: 'center'
  },
  containerPickIcons: {
    flexDirection: 'column',
    width: '100%',
    height: "80%",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15
  },
  containerPickPhoto: {
    alignItems: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 30,
    marginBottom: 8,
    fontWeight: '600'
  },
  scrollViewStyle: {
    width: '100%',
    height: '100%'
  },
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.1
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 3,
    flexGrow: 1,
    marginBottom: 10,
    width: '95%',
    borderColor: Colors.borderColorButtonNewRequest,
    borderWidth: 0.5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 10
  },
  topInfoCard: {
    flexDirection: 'row',
    flex: 1,
    margin: 2
  },
  iconsPickPhoto: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  pickerImagesContainer: {
    width: '95%',
    flexDirection: 'row',
    top: 10,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute'
  },
  activityIndicatorPosition: {
    position: 'absolute',
    zIndex: 1,
    left: 30,
    top: 30
  },
  pickerImages: {
    width: '33%',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  pickerImagesStyle: {
    borderRadius: 50,
    width: 100,
    height: 100,
    borderColor: 'lightgray',
    borderWidth: 1
  },
  textDelete: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12
  },
  buttonDeleteImage: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center'
  },
  buttonPickerImage: {
    height: 100,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  cardInfoTitleContainer: {
    flex: 3,
    marginLeft: 5
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  infoSubTitle: {
    color: '#6F6F6F',
    fontSize: 13,
    top: 3
  },
  cardTopIconContainer: {
    flex: 0.25
  },
  cardTopIcon: {
    width: 27,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#1B61AA'
  },
  InfoCardContainer: {
    flexDirection: 'column',
    width: '102.9%',
    left: -5.3,
    top: 5
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 7,
    height: 'auto'
  },
  middleInfoCardContainer: {
    flexDirection: 'row',
    top: 5,
    alignItems: 'center'
  },
  middleInfoCardRequest: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoDateContainer: {
    flex: 1.5,
    left: 10,
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconCalendary: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  textDateContainer: {
    flexDirection: 'row'
  },
  textDate_1: {
    color: '#6F6F6F',
    marginLeft: 5,
    fontSize: 13
  },
  rowMidlleStatus: {
    flexDirection: 'row',
    width: Layout.window.width * 0.45,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginBottom: 10
  },
  textDate_2: {
    color: '#C67700',
    marginLeft: 2,
    fontSize: 13
  },
  iconOpenCard: {
    flex: 0.5,
    top: -5,
    left: 3
  },
  bottomInfoCardContainer: {
    top: 3,
    left: 5
  },
  textDescription: {
    display: 'flex',
    flexWrap: 'wrap',
    width: Layout.window.width * 0.87,
    height: 'auto'
  },
  bottomInfoCardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    maxWidth: '95%',
    minHeight: Layout.window.height * 0.04,
    alignItems: 'center'
  },
  textCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textCategoryTitle: {
    textAlign: 'center',
    marginRight: 10
  },
  bubbleCategoryContainer: {
    backgroundColor: '#1B61AA',
    borderRadius: 10,
    minHeight: 16,
    paddingVertical: 1,
    maxWidth: Layout.window.width * 0.3
  },
  bubbleCategoryText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: Layout.window.width * 0.35,
    minHeight: 15
  },
  iconViewImage: {
    width: 25,
    height: 23,
    tintColor: '#1B61AA',
    resizeMode: 'contain'
  },
  containerViewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  textStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  textStatusTitle: {
    textAlign: 'center',
    marginRight: 5
  },
  bubbleStatusContainer: {
    borderRadius: 10,
    height: 'auto',
    flexWrap: 'wrap',
    paddingVertical: 1
  },
  bubbleStatusText: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 10,
    display: 'flex',
    flexWrap: 'wrap'
  },
  containerCategory: {
    backgroundColor: '#1B61AA',
    borderRadius: 10,
    height: 'auto',
    flexWrap: 'wrap',
    paddingVertical: 2,
    paddingHorizontal: 6
  },
  containerStatus: {
    height: 'auto',
    paddingVertical: 2,
    backgroundColor: '#9EA958',
    borderRadius: 15,
    marginRight: 20
  },
  textStatus: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 10,
    display: 'flex',
    flexWrap: 'wrap'
  },
  containerMenuRequest: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  textMenuRequest: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  containerMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 90
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  buttonMenu: {
    height: 120,
    width: 150,
    margin: 12,
    borderRadius: 20,
    backgroundColor: '#1B61AA'
  },
  containerImgMenu: {
    width: 60,
    height: 60
  },
  imgMenu: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  container: {
    backgroundColor: '#1B61AA',
    width: '100%',
    height: '100%'
  },
  firstAnimate: {
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    paddingVertical: Layout.window.height / 20
  },
  imageBackground: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    left: 10,
    top: -35,
    width: '97%',
    height: '80%',
    opacity: 0.8
  },
  containerCamera: {
    top: 15,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: Layout.window.screen.height - 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container2: {
    top: 15,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: Layout.window.screen.height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    marginVertical: (Layout.window.height * 7) / 100,
    alignSelf: 'flex-start',
    borderRadius: 50,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: (Layout.window.width * 7) / 100
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  iconCamera: {
    position: 'absolute',
    bottom: 0,
    alignContent: 'flex-end',
    marginVertical: (Layout.window.height * 7) / 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowOffset: { width: -4, height: 6 },
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    width: Layout.window.width * (20 / 100),
    height: 40,
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center'
  },
  containerUpload: {
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    minHeight: Layout.window.width * 0.2
  },
  imageContainer: {
    alignItems: 'center'
  }
});
