import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';
import { aboutAPI } from './../api/aboutApi';

const SET_ABOUT_API_DATA = '/about/SET_ABOUT_API_DATA';

const SET_ABOUT_MEETING_DATA = '/about/SET_ABOUT_MEETING_DATA';
const SET_ABOUT_MEETING_DELETE = '/about/SET_ABOUT_MEETING_DELETE';

const SET_ABOUT_ORGANIZATION_HISTORY_DATA = '/about/SET_ABOUT_ORGANIZATION_HISTORY_DATA';
const SET_ABOUT_ORGANIZATION_HISTORY_DELETE = '/about/SET_ABOUT_ORGANIZATION_HISTORY_DELETE';

const SET_ABOUT_TEAM_MEMBERS_DATA = '/about/SET_ABOUT_TEAM_MEMBERS_DATA';
const SET_ABOUT_TEAM_MEMBERS_DELETE = '/about/SET_ABOUT_TEAM_MEMBERS_DELETE';

let initialState = {
    aboutData: null,
    organizationHistoryData: null,
    meeting: null,
    team: null
};


export const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ABOUT_API_DATA:
            return {
                ...state,
                aboutData: action.aboutData
            }

        // organization history

        case SET_ABOUT_ORGANIZATION_HISTORY_DATA:
            return {
                ...state,
                organizationHistoryData: action.organizationHistoryData
            }

        case SET_ABOUT_ORGANIZATION_HISTORY_DELETE:
            let organizationHistoryData = [...state.organizationHistoryData];
            organizationHistoryData = organizationHistoryData.filter(el => {
                if (el.id !== action.id) {
                    return el;
                }
            })

        // meeting
        case SET_ABOUT_MEETING_DATA:
            return {
                ...state,
                meeting: action.meeting
            }
        case SET_ABOUT_MEETING_DELETE:
            let meeting = [ ...state.meeting ];
            meeting = meeting.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
        // team members
        case SET_ABOUT_TEAM_MEMBERS_DATA:
            return {
                ...state,
                team: action.team
            }
        case SET_ABOUT_TEAM_MEMBERS_DATA:
            let team = [ ...state.team ];
            team = team.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
        default:
            return state;
    }
}

// action creator

// header

export const setAboutHeaderData = (aboutData) => ({ type: SET_ABOUT_API_DATA, aboutData });

// organization history

export const setAboutOrganizationHistoryData = (organizationHistoryData) => ({ type: SET_ABOUT_ORGANIZATION_HISTORY_DATA, organizationHistoryData });
export const setAboutOrganizationHistoryDelete = (aboutData) => ({ type: SET_ABOUT_ORGANIZATION_HISTORY_DELETE, aboutData });

// meeting

export const setAboutMeetingData = (meeting) => ({ type: SET_ABOUT_MEETING_DATA, meeting });
export const setAboutMeetingDelete = (id) => ({ type: SET_ABOUT_MEETING_DELETE, id });

// team members

export const setAboutTeamMembersData = (team) => ({ type: SET_ABOUT_TEAM_MEMBERS_DATA, team });
export const setAboutTeamMembarsDelete = (id) => ({ type: SET_ABOUT_TEAM_MEMBERS_DELETE, id });

// thunk

// header
export const getAboutHeader = () => (dispatch) => {

    return aboutAPI.setAboutHeader()
        .then(res => {
            console.log(res);

            dispatch(setAboutHeaderData(res));
        });
}
export const getAboutHeaderCreate = (data) => async (dispatch) => {
    console.log(data);

    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setCreateAboutHeader(data).then(res => {
        dispatch(getAboutHeader());
    });
}
export const getAboutHeaderUpdate = (data) => async (dispatch) => {
    console.log(data);
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setUpdateAboutHeader(data).then(res => {
        dispatch(getAboutHeader());
    });
}

// organization history 

export const getAboutOrganizationHistory = () => (dispatch) => {

    return aboutAPI.setAboutOrganizationHistory()
        .then(res => {
            dispatch(setAboutOrganizationHistoryData(res));
        });
}

export const getAboutOrganizationHistoryCreate = (data) => async (dispatch) => {

    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setCreateOrganizationHistory(data).then(res => {
        dispatch(getAboutOrganizationHistory());
    });
}

export const getAboutOrganizationHistoryUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setUpdateOrganizationHistory(data).then(res => {
        dispatch(getAboutOrganizationHistory());
    });
}


export const getAboutOrganizationHistoryDelete = (id) => (dispatch) => {
    return aboutAPI.setOrganizationHistoryDelete(id)
        .then(res => {
            dispatch(getAboutOrganizationHistory());
            dispatch(setAboutOrganizationHistoryDelete(id));
        });
}

// meeting

export const getAboutMeeting = () => (dispatch) => {
    return aboutAPI.setMeeting()
        .then(res => {
            dispatch(setAboutMeetingData(res));
        });
}

export const getAboutMeetingCreate = (data) => async (dispatch) => {

    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setMeetingCreate(data).then(res => {
        dispatch(getAboutMeeting());
    });
}

export const getAboutMeetingUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setMeetingUpdate(data).then(res => {
        dispatch(getAboutMeeting());
    });
}

export const getAboutMeetingDelete = (id) => (dispatch) => {
    return aboutAPI.setMeetingDelete(id)
        .then(res => {
            dispatch(getAboutMeeting());
            dispatch(setAboutMeetingDelete(id));
        });
}

// team members

export const getAboutTeamMembars = () => (dispatch) => {
    return aboutAPI.setTeamMembers()
        .then(res => {
            dispatch(setAboutTeamMembersData(res));
        });
}

export const getAboutTeamMembersCreate = (data) => async (dispatch) => {

    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setTeamMembersCreate(data).then(res => {
        dispatch(getAboutTeamMembars());
    });
}

export const getAboutTeamMembersUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await aboutAPI.setTeamMembersUpdate(data).then(res => {
        dispatch(getAboutTeamMembars());
    });
}

export const getAboutTeamMembersDelete = (id) => (dispatch) => {
    return aboutAPI.setTeamMembersDelete(id)
        .then(res => {
            dispatch(getAboutTeamMembars());
            dispatch(setAboutTeamMembarsDelete(id));
        });
}