import {
    DynamicCheckboxModel,
    DynamicCheckboxGroupModel,
   
    DynamicFormGroupModel,
    DynamicInputModel,
    
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    DynamicTimePickerModel
} from "@ng-dynamic-forms/core";

export const TASK_LIST = [

    

    new DynamicFormGroupModel(
        {
            id: "room",
            group: [

                new DynamicSelectModel<string>(
                    {
                        id: "roomSize",
                        label: "ORDERS",
                        placeholder: "Orders",
                        options: [
                            {
                                label: "Standard",
                                value: "Standard"
                            },
                            {
                                label: "Double Room",
                                value: "double-room"
                            },
                            {
                                label: "Business Suite",
                                value: "business-suite"
                            },
                            {
                                label: "Presidential Suite",
                                value: "presidential-suite"
                            },
                            {
                                label: "Storeroom",
                                value: "storeroom"
                            }
                        ]
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-4",
                        }
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "roomQuantity",
                        inputType: "number",
                        label: "Quantity",
                        placeholder: "Quantity",
                        max: 5,
                        min: 0
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-2",
                        }
                    }
                )
            ]
        },
        {
            grid: {
                control: "ui-g"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "firstName",
            label: "First Name",
            placeholder: "First Name",
            validators: {
                required: null
            },
            errorMessages: {
                required: "{{ label }} is required"
            }
        },
        {
            element: {
                label: "ui-widget"
            },
            grid: {
                host: "ui-g",
                container: "ui-g-7"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "lastName",
            label: "Last Name",
            placeholder: "Last Name",
            validators: {
                required: null
            },
            errorMessages: {
                required: "{{ label }} is required"
            }
        },
        {
            element: {
                label: "ui-widget"
            },
            grid: {
                host: "ui-g",
                container: "ui-g-7"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "email",
            label: "E-Mail",
            placeholder: "E-Mail",
            validators: {
                email: null
            },
            errorMessages: {
                email: "{{ label }} is not valid"
            }
        },
        {
            element: {
                label: "ui-widget"
            },
            grid: {
                host: "ui-g",
                container: "ui-g-7"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "phone",
            label: "Phone Number",
            placeholder: "Phone Number",
            mask: "+(99) 999-9999",
            validators: {
                required: null
            },
            errorMessages: {
                required: "{{ label }} is required"
            }
        },
        {
            element: {
                label: "ui-widget"
            },
            grid: {
                host: "ui-g",
                container: "ui-g-7"
            }
        }
    ),

    new DynamicFormGroupModel(
        {
            id: "addressStreet",
            group: [

                new DynamicInputModel(
                    {
                        id: "streetName",
                        label: "Street Name",
                        placeholder: "Street Name"
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-7"
                        }
                    }
                ),

            
            ]
        },
        {
            grid: {
                control: "ui-g"
            }
        }
    ),

    new DynamicFormGroupModel(
        {
            id: "addressLocation",
            group: [

                new DynamicInputModel(
                    {
                        id: "zipCode",
                        label: "ZIP",
                        placeholder: "ZIP"
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-2"
                        }
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "state",
                        label: "State",
                        placeholder: "State",
                        list: ['L3VPN', 'SERVICES', 'TEST1']
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-4",
                        }
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "city",
                        label: "City",
                        placeholder: "City"
                    },
                    {
                        element: {
                            label: "ui-widget"
                        },
                        grid: {
                            host: "ui-g-5",
                        }
                    }
                )
            ]
        },
        {
            grid: {
                control: "ui-g"
            }
        }
    ),



  
];