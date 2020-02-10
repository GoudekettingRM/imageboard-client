import axios from "axios";
const baseUrl = "http://localhost:4000";

function allImages(images) {
  return {
    type: "images/ALL_IMAGES",
    payload: images
  };
}

function addNewImageToStore(imageData) {
  return {
    type: "images/ADD_IMAGE_TO_STORE",
    payload: imageData
  };
}

export function addImage(imageData) {
  return async (dispatch, getState) => {
    try {
      const newImage = await axios.post(`${baseUrl}/images`, {
        url: imageData.url,
        title: imageData.title
      });
      const action = addNewImageToStore(newImage);
      dispatch(action);
    } catch (error) {
      throw error;
    }
  };
}

export function getAllImages() {
  return async (dispatch, getState) => {
    const state = getState();
    const { images } = state;

    try {
      if (images.length === 0) {
        const images = await axios.get(`${baseUrl}/images`);

        const action = allImages(images.data);

        dispatch(action);
      }
    } catch (error) {
      console.error(error);
    }
  };
}
