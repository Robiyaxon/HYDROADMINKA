import { globalAPI } from "../api/api";
import { technicalAPI } from "./../api/technicalApi";

const SET_TECHNICAL_HEADER = "/technical/SET_TECHNICAL_HEADER";

const SET_TECHNICAL_VIDEOS = "/technical/SET_TECHNICAL_VIDEOS";
const SET_TECHNICAL_VIDEOS_DELETE = "/technical/SET_TECHNICAL_VIDEOS_DELETE";

const SET_TECHNICAL_MACHINE = "/technical/SET_TECHNICAL_MACHINE";
const SET_TECHNICAL_MACHINE_DELETE = "/technical/SET_TECHNICAL_MACHINE_DELETE";

const SET_TECHNICAL_STATISTICS = "/technical/SET_TECHNICAL_STATISTICS";
const SET_TECHNICAL_STATISTICS_DELETE =
  "/technical/SET_TECHNICAL_STATISTICS_DELETE";

let initialState = {
  header: null,
  videos: null,
  machine: null,
  statistics: null,
};

export const technicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TECHNICAL_HEADER:
      return {
        ...state,
        header: action.header,
      };

    // Youtube videos url

    case SET_TECHNICAL_VIDEOS:
      return {
        ...state,
        videos: action.videos,
      };
    case SET_TECHNICAL_VIDEOS_DELETE:
      let videos = [...state.videos];
      videos = videos.filter((el) => {
        if (el.id !== action.id) {
          return el;
        }
      });

    // technical machine

    case SET_TECHNICAL_MACHINE:
      return {
        ...state,
        machine: action.machine,
      };
    case SET_TECHNICAL_MACHINE_DELETE:
      let machine = [...state.machine];
      machine = machine.filter((el) => {
        if (el.id !== action.id) {
          return el;
        }
      });

    // statistics

    case SET_TECHNICAL_STATISTICS:
      return {
        ...state,
        statistics: action.statistics,
      };
    case SET_TECHNICAL_STATISTICS_DELETE:
      let statistics = [...state.statistics];
      statistics = statistics.filter((el) => {
        if (el.id !== action.id) {
          return el;
        }
      });
    default:
      return state;
  }
};

// acion creator

// header

export const setTechnicalHeaderData = (header) => ({
  type: SET_TECHNICAL_HEADER,
  header,
});

// Youtube videos url

export const setTechnicalVideosData = (videos) => ({
  type: SET_TECHNICAL_VIDEOS,
  videos,
});
export const setTechnicalVideosDelete = (id) => ({
  type: SET_TECHNICAL_VIDEOS_DELETE,
  id,
});

// TechnicalMachine

export const setTechnicalMachineData = (machine) => ({
  type: SET_TECHNICAL_MACHINE,
  machine,
});
export const setTechnicalMachineDeleteAC = (id) => ({
  type: SET_TECHNICAL_MACHINE_DELETE,
  id,
});

// Statistics

export const setStatisticsData = (statistics) => ({
  type: SET_TECHNICAL_STATISTICS,
  statistics,
});
export const setStatisticsDeleteAC = (id) => ({
  type: SET_TECHNICAL_STATISTICS_DELETE,
  id,
});

// thunk

// header

export const getTechnicalHeader = () => (dispatch) => {
  return technicalAPI.setTechnical().then((res) => {
    dispatch(setTechnicalHeaderData(res));
  });
};
export const getTechnicalCreate = (data) => async (dispatch) => {
  let image = await globalAPI.uploadImage(data.selectedImage).then((res) => {
    return res;
  });

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await technicalAPI.setTechnicalCreate(data).then((res) => {
    dispatch(getTechnicalHeader());
  });
};
export const getTechnicalUpdate = (data) => async (dispatch) => {
  let image =
    data.selectedI &&
    (await globalAPI.uploadImage(data.selectedImage).then((res) => {
      return res;
    }));

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await technicalAPI.setTechnicalUpdate(data).then((res) => {
    dispatch(getTechnicalHeader());
  });
};

// Youtube videos url

export const getTechnicalVideo = () => (dispatch) => {
  return technicalAPI.setTechnicalVideos().then((res) => {
    dispatch(setTechnicalVideosData(res));
  });
};
export const getTechnicalVideoCreate = (data) => async (dispatch) => {
  return await technicalAPI.setTechnicalVideosCreate(data).then((res) => {
    dispatch(getTechnicalVideo());
  });
};
export const getTechnicalVideoUpdate = (data) => async (dispatch) => {
  return await technicalAPI.setTechnicalVideosUpdate(data).then((res) => {
    dispatch(getTechnicalVideo());
  });
};

export const getTechnicalVideoDelete = (id) => (dispatch) => {
  return technicalAPI.setTechnicalVideosDelete(id).then((res) => {
    dispatch(getTechnicalVideo());
    dispatch(setTechnicalVideosDelete(id));
  });
};

// TechnicalMachine

export const getTechnicalMachine = () => (dispatch) => {
  return technicalAPI.setTechnicalMachine().then((response) => {
    dispatch(setTechnicalMachineData(response));
  });
};
export const getTechnicalMachineCreate = (data) => async (dispatch) => {
  return await technicalAPI.setTechnicalMachineCreate(data).then((response) => {
    dispatch(getTechnicalMachine());
  });
};
export const getTechnicalMachineUpdate = (data) => async (dispatch) => {
  return await technicalAPI.setTechnicalMachineUpdate(data).then((response) => {
    dispatch(getTechnicalMachine());
  });
};
export const getTechnicalMachineDelete = (id) => (dispatch) => {
  return technicalAPI.setTechnicalMachineDelete(id).then((response) => {
    dispatch(getTechnicalMachine());
    dispatch(setTechnicalMachineDeleteAC(id));
  });
};

// statistics

export const getStatistics = () => (dispatch) => {
  return technicalAPI.setStatistics().then((response) => {
    dispatch(setStatisticsData(response));
  });
};
export const getStatisticsCreate = (data) => async (dispatch) => {
  return await technicalAPI.setStatisticsCreate(data).then((response) => {
    dispatch(getStatistics());
  });
};
export const getStatisticsUpdate = (data) => async (dispatch) => {
  return await technicalAPI.setStatisticsUpdate(data).then((response) => {
    dispatch(getStatistics());
  });
};
export const getStatisticsDelete = (id) => (dispatch) => {
  return technicalAPI.setStatisticsDelete(id).then((response) => {
    dispatch(getStatistics());
    dispatch(setStatisticsDeleteAC(id));
  });
};
