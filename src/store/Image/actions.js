import axios from "axios";
const baseUrl = "http://localhost:4000";

function allImages(images) {
  return {
    type: "images/ALL_IMAGES",
    payload: images
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
