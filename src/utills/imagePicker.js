import { Platform } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import AppAlert from '../constants/alert';

const ChooseImage = async (
  width = 400,
  height = 400,
  isCropping = true,
  mediaType = 'photo',
  onSuccess,
) => {
  AppAlert.shared.showActionSheet(
    'choose-option',
    [ 'Select From Library', 'Use Camera'],
    async (button) => {
      if (button === 'Use Camera') {
        openCamera();
      } else if (button === 'Select From Library') {
        openImagePicker();
      }
    },
  );

  /**
   * Open camera.
   */
  async function openCamera() {
    try {
      let imageObject = await OpenCamera(width, height, isCropping, mediaType);
      onSuccess(imageObject);
    } catch (error) {
      Object.entries(error).length !== 0 &&
        error.code !== 'E_PICKER_CANCELLED' &&
        AppAlert.shared.showAlertFor(null, error);
    }
  }

  /**
   * Open image picker library.
   */
  async function openImagePicker() {
    try {
      let imageObject = await OpenImagePickerLibrary(width, height, isCropping, mediaType);
      onSuccess(imageObject);
    } catch (error) {
      Object.entries(error).length !== 0 &&
        error.code !== 'E_PICKER_CANCELLED' &&
        AppAlert.shared.showAlertFor(null, error);
    }
  }
};

/**
 * OpenImagePickerLibrary
 * It is used to choose image from native image picker library.
 */
const OpenImagePickerLibrary = async (
  width = 400,
  height = 400,
  isCropping = true,
  mediaType = 'photo',
) => {
  const selectedDocument = await ImageCropPicker.openPicker({
    width: width,
    height: height,
    compressImageMaxWidth: width,
    compressImageMaxHeight: height,
    compressImageQuality: Platform.OS === 'ios' ? 0.75 : 0.75,
    multiple: false,
    mediaType: mediaType,
    cropping: isCropping,
    cropperCircleOverlay: false,
  });

  if (selectedDocument && selectedDocument.path) {
    let documentPath =
      Platform.OS === 'android'
        ? selectedDocument.path
        : selectedDocument.path.includes('file://')
        ? selectedDocument.path
        : `file://${selectedDocument.path}`;
    return {
      documentPath: { uri: documentPath },
      documentName: selectedDocument.path.substring(selectedDocument.path.lastIndexOf('/') + 1),
      documentMimeType: selectedDocument.mime,
    };
  } else {
    return null;
  }
};

/**
 * OpenCamera
 * It is used to choose image from native image picker library.
 */
const OpenCamera = async (width = 400, height = 400, isCropping = true, mediaType = 'photo') => {
  try {
    const selectedDocument = await ImageCropPicker.openCamera({
      width: width,
      height: height,
      compressImageMaxWidth: width,
      compressImageMaxHeight: height,
      compressImageQuality: Platform.OS === 'ios' ? 0.75 : 0.75,
      multiple: false,
      mediaType: mediaType,
      cropping: isCropping,
      cropperCircleOverlay: false,
    });

    if (selectedDocument && selectedDocument.path) {
      let documentPath =
        Platform.OS === 'android'
          ? selectedDocument.path
          : selectedDocument.path.includes('file://')
          ? selectedDocument.path
          : `file://${selectedDocument.path}`;

      return {
        documentPath: { uri: documentPath },
        documentName: selectedDocument.path.substring(selectedDocument.path.lastIndexOf('/') + 1),
        documentMimeType: selectedDocument.mime,
      };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export { ChooseImage };
