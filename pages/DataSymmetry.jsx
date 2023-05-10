import React, { useState } from 'react';
import { SymmetryDataForms } from "../components/DataSymmetry/index";

import chroma from 'chroma-js'

import { accentColor, darkColor, primaryColor } from "../components/DataSymmetry/symmetryTheme";
const colorScale = chroma.scale([darkColor, accentColor])
    .mode('lch').colors(4)


    const onSubmit = async (values) => {
        // e.preventDefault();
        console.log(values)
        const response = await fetch("/api/breathwork", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values),
        });
      
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
      
        const data = await response.json();
        console.log('POST: ', data);
      };


const SymmetryDataForm = ({ symmetryData }) => {


    const [selectedLayout, setSelectedLayout] = useState({ layout: 'row', variation: 'primary', colorScale })

    const { rowFields } = symmetryData;

    return (<>
        <SymmetryDataForms
            fields={rowFields}
            layout={selectedLayout.layout}
            variation={selectedLayout.variation}
            formSubmit={(values) => console.log("THIS HERE YO: ", values)}
        />

    </>)
}



// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;

    const rowFields = [
        {
            _id: "5fe72d4f1edd8c4acd5160b7",
            name: "title",
            edit: false,
            gridSize: 12,
            label: "Title",
            required: true,
            table: "memo",
            type: "string",
            validators: [
                {
                    min: 3
                }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160ba",
            name: "content",
            edit: false,
            gridSize: 12,
            label: "Content",
            required: true,
            table: "memo",
            type: "string",
            validators: [
                {
                    min: 3
                }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160b9",
            name: "text",
            edit: false,
            gridSize: 12,
            label: "Text",
            required: true,
            table: "memo",
            type: "string",
            validators: [
                {
                    min: 3
                }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160ba",
            name: "testRadioButtons",
            edit: true,
            gridSize: 12,
            label: "Boolean Radio",
            required: true,
            table: "memo",
            type: "boolean",
            options: {
                type: 'boolean',
                title: 'Test Radio',
                items: [
                    {
                        label: 'True', selected: false
                    }, {
                        label: 'False', selected: false
                    }, {
                        label: 'Yes', selected: false
                    }]
            },
            validators: [
                {
                    min: 3
                }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160ba",
            name: "testMultipleSelectDropdown",
            edit: true,
            gridSize: 12,
            label: "Multiple Select Dropdown",
            required: false,
            table: "memo",
            type: "multiple-select-dropdown",
            options: {
                title: "Test Multiple Select Dropdown",
                items: [
                    { key: '0', label: 'Honda', value: 'honda' },
                    { key: '1', label: 'VW', value: 'vw' },
                    { key: '2', label: 'FORD', value: 'ford' }
                ]
            },
            validators: [
                // {
                //     min: 3
                // }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160ba",
            name: "testSingleSelectDropdown",
            edit: true,
            gridSize: 12,
            label: "Single Select Dropdown",
            required: false,
            table: "memo",
            type: "single-select-dropdown",
            options: {
                title: "Test Single Select Dropdown",
                items: [
                    { key: '0', label: 'Honda', value: 'honda' },
                    { key: '1', label: 'VW', value: 'vw' },
                    { key: '2', label: 'FORD', value: 'ford' }
                ]
            },
            validators: [
                // {
                //     min: 3
                // }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160ba",
            name: "testMutliCheckBox",
            edit: true,
            gridSize: 12,
            label: "Multiple Selection Checkboxes",
            required: true,
            table: "memo",
            type: "multi-check",
            options: {
                type: 'mutli-checkbox',
                title: 'Test Checkbox',
                items: [
                    { key: '0', value: 'summer', label: 'Summer' },
                    { key: '1', value: 'winter', label: 'Winter' },
                    { key: '2', value: 'spring', label: 'Spring' },
                    { key: '3', value: 'fall', label: 'Fall' }
                ]
            },
            validators: [
                // {
                //     min: 3
                // }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160b9",
            name: "codeArea",
            edit: false,
            gridSize: 12,
            label: "Code Area",
            required: true,
            table: "memo",
            type: "code-area",
            validators: [
                {
                    min: 3
                }
            ]
        },
        {
            _id: "5fe72d4f1edd8c4acd5160bb",
            name: "date",
            edit: false,
            gridSize: 12,
            label: "Date",
            required: true,
            table: "memo",
            type: "date",
            validators: [
                {
                    min: 3
                }
            ]
        }
    ];

    const symmetryFormVariations = [
        { layout: 'row', variation: 'primary', label: "Primary Row" },
        { layout: 'row', variation: 'secondary', label: "Secondary Row" },
        { layout: 'column', variation: 'primary', label: "Primary Column" },
        { layout: 'column', variation: 'secondary', label: "Secondary Column" },
    ]


    // Return the Profile Data to the Page
    return {
        props: {
            symmetryData: {
                rowFields,
                symmetryFormVariations
            }
        }
    }
}


export default SymmetryDataForm;