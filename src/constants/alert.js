import { ActionSheetIOS, Alert, Platform } from 'react-native';

// Destructuring Contexts.

/**
 * AppAlert to stored live objects.
 */
export default class AppAlert {
  //Shared instance.
  static shared = AppAlert.shared == null ? new AppAlert() : this.shared;

  /**
   * It is used to display an alert with given parameters.
   * @param {*} title to display title on alert UIs.
   * @param {*} message to display message on alert UIs.
   * @param {*} buttons to display buttons on alert UIs.
   * @param {*} onPressCallBack to handle alert buttons call backs.
   */
  showAlert(
    title = null,
    message = null,
    buttons = ['cancel'],
    onPressCallBack = null,
    cancelable = true,
  ) {
    var alertButtons = [];
    buttons.forEach((value) => {
      alertButtons.push({
        text: value,
        onPress: () => (onPressCallBack ? onPressCallBack(value) : null),
        style: this.alertOptionStyle(value),
      });
    });

    Alert.alert(title, message, alertButtons, { cancelable: cancelable });
  }

  /**
   * It is used to return alert option style.
   * @param {*} button
   */
  alertOptionStyle(button) {
    if (button === 'cancel') {
      return 'cancel';
    } else if (button === 'take-photo') {
      return 'destructive';
    } else if (button === 'remove') {
      return 'destructive';
    } else if (button === 'delete') {
      return 'destructive';
    } else if (button === 'discards') {
      return 'destructive';
    } else if (button === 'yesImSure') {
      return 'destructive';
    } else if (button === 'cancel-button-0-right') {
      return 'destructive';
    } else {
      return 'default';
    }
  }

  /**
   * It is used to display action sheet or alert based on Platform
   * @param {*} message to display message on action sheet or alert.
   * @param {*} options to display list options on action sheet or alert.
   * @param {*} onPressCallBack to handle option press call back.
   */
  showActionSheet(
    message,
    options = ['take-photo', 'choose-photo', 'cancel'],
    onPressCallBack = null,
  ) {
    if (Platform.OS === 'ios') {
      let cancelButtonIndex = options.findIndex((option) => option === 'cancel');
      let destructiveButtonIndex = options.findIndex(
        (option) => option === 'logout' || option === 'delete',
      );
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: options,
          cancelButtonIndex: cancelButtonIndex,
          destructiveButtonIndex: destructiveButtonIndex,
          message: message,
        },
        (buttonIndex) => {
          onPressCallBack(options[buttonIndex]);
        },
      );
    } else {
      this.showAlert(null, message, options, onPressCallBack);
    }
  }

  /**
   * It is used to display an error messages on alert.
   * @param {*} title to display title of alert.
   * @param {*} error to display message of lert.
   */
  showAlertFor(title = null, error = null, navigation = null) {
    if (navigation && error.response.status === 401) {
      this.clearCacheAndNavigateToAuthStack(navigation);
    } else {
      var alertTitle = title;
      var alertMessage = 'Something went wrong.';
      if (
        error &&
        error.message != null &&
        error.message !== 'Request failed with status code 400'
      ) {
        alertMessage = error.message;
      } else if (error && error.response === undefined) {
        alertMessage = error;
      } else if (error.response && error.response.data === undefined) {
        alertMessage = error.response;
      } else if (error.response.data && error.response.data.meta === undefined) {
        if (error.response.data.message) {
          alertMessage = error.response.data.message;
        } else {
          alertMessage = error.response.data;
        }
        if (error.response.data.meta && error.response.data.meta.errorMessage === undefined) {
          alertMessage = error.response.data.meta;
          if (error.response.data.meta.errorMessage) {
            alertMessage = error.meta.errorMessage;
          }
        }
      }
    }
  }
}
