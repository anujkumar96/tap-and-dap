import { createSlice } from "@reduxjs/toolkit";

const projects = [
    {
        "id": 1,
        "name": "PGR",
        "client": "Piramal"
    },
    {
        "id": 2,
        "name": "ILMS",
        "client": "Piramal"
    },
    {
        "id": 3,
        "name": "TCG",
        "client": "West Bengal"
    },
    {
        "id": 4,
        "name": "DDO",
        "client": "WalkingTree"
    },
    {
        "id": 5,
        "name": "Finance Forecast",
        "client": "WalkingTree"
    },
]
const employees = [
    {
        "name": "Shivam",
        "designation": "ASE",
        "supervisor": "None",
        "businessUnit": "NA",
        "project": "DDO",
        "allocationPercentage": "50"
    },
    {
        "name": "Anuj",
        "designation": "ASE",
        "supervisor": "aa",
        "businessUnit": "None",
        "project": "Finance Forecast",
        "allocationPercentage": "38"
    },
    {
        "name": "Avdesh",
        "designation": "SSE",
        "supervisor": "Yes",
        "businessUnit": "None",
        "project": "None",
        "allocationPercentage": "92"
    },
    {
        "id": "4",
        "name": "Rahul",
        "designation": "SE",
        "supervisor": "None",
        "businessUnit": "NA",
        "project": "",
        "allocationPercentage": ""
    },
];

const clients = [
    {
        "id": 1,
        "name": "Piramal",
        "email": "piramalgroup@gmail.com",
        "phone": "9181716151"
    },
    {
        "id": 2,
        "name": "West Bengal Associates",
        "email": "westbengalassociates@gmail.com",
        "phone": "88888777700"
    },
    {
        "id": 3,
        "name": "Unknown",
        "email": "unknownforunknowns@gmail.com",
        "phone": "9000000000"
    },
    {
        "id": 4,
        "name": "WalkinngTree",
        "email": "walkingtree@walkingtree.tech",
        "phone": "9876543210"
    },
    {
        "id": 5,
        "name": "Testing",
        "email": "testmail@gmail.com",
        "phone": "7777777777"
    }
]



export const financeSlice = createSlice({
    name: 'add',
    initialState: {
        client: clients ? clients : [],
        employee: employees ? employees : [],
        project: projects ? projects : [],
        filteredEmployees: [],
    },
    reducers: {
        addClient: (state, payload) => {
            state.client.push(payload?.payload)
        },
        addProject: (state, payload) => {
            state.project.push(payload?.payload)
        },
        addEmployee: (state, payload) => {
            state.employee.push(payload?.payload)
        },
        deleteProject: (state, payload) => {
            const indexToDelete = state.project.findIndex(proj => proj.id === payload.payload);
            if (indexToDelete !== -1) {
                state.project.splice(indexToDelete, 1);
            }
        },
        deleteClient: (state, payload) => {
            const indexToDelete = state.client.findIndex(proj => proj.id === payload.payload);
            if (indexToDelete !== -1) {
                state.client.splice(indexToDelete, 1);
            }
        },
        filteredEmployees: (state, payload) => {
            const filtered = state.employee.filter((emp) => emp.name === payload?.payload);
            state.filteredEmployees.push(filtered);
        },
        updateClient: (state, payload) => {
            const { id, name, email, phone } = payload.payload;
            const indexToUpdate = state.client.findIndex((client) => client.id === id);
            if (indexToUpdate !== -1) {
                state.client[indexToUpdate] = { id, name, email, phone };
            }
        },
        allocateProject: (state, payload) => {
            const findIndex = state.employee.findIndex((data) => data.id === payload.payload.id);
            if (findIndex !== -1) {
                const project = payload.payload.project
                const percentage = payload.payload.allocationPercentage;
                state.employee[findIndex].project = project;
                state.employee[findIndex].allocationPercentage = percentage
            }
        }

    }
})

export const { addClient, addEmployee, addProject, deleteProject, filteredEmployees, updateClient, deleteClient, allocateProject } = financeSlice.actions;
export default financeSlice.reducer
