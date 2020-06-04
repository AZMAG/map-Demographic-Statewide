app.censusFieldsConfig = [{
        fieldName: 'acres',
        fieldAlias: 'ACRES',
        fieldType: 'Number',
        tableHeader: 'Total Acres',
        indentLevel: 0,
        universeField: 0,
        category: 'General',
        rowID: 1,
        groupID: "<span class='myHiddenClass'>01</span>General",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'sqmi',
        fieldAlias: 'SQMI',
        fieldType: 'Number',
        tableHeader: 'Total Square Miles',
        indentLevel: 0,
        universeField: 0,
        category: 'General',
        rowID: 2,
        groupID: "<span class='myHiddenClass'>01</span>General",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'total_pop',
        fieldAlias: 'TOTAL_POP',
        fieldType: 'Number',
        tableHeader: 'Total Population',
        indentLevel: 0,
        universeField: 0,
        category: 'General',
        rowID: 3,
        groupID: "<span class='myHiddenClass'>01</span>General",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'total_pop',
        fieldAlias: 'TOTAL_POP',
        fieldType: 'Number',
        tableHeader: 'Total Population ',
        indentLevel: 0,
        universeField: 1,
        category: 'Age',
        rowID: 4,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'median_age',
        fieldAlias: 'MEDIAN_AGE',
        fieldType: 'Number',
        tableHeader: 'Median Age',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 5,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: false,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'under5',
        fieldAlias: 'Under 5',
        fieldType: 'Number',
        tableHeader: 'Under 5',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 6,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_UNDER5',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age5to17',
        fieldAlias: '5 to 17',
        fieldType: 'Number',
        tableHeader: '5 to 17',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 7,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_5TO17',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age18to34',
        fieldAlias: '18 to 34',
        fieldType: 'Number',
        tableHeader: '18 to 34',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 8,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_18TO34',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age35to49',
        fieldAlias: '35 to 49',
        fieldType: 'Number',
        tableHeader: '35 to 49',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 9,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_35TO49',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age50to64',
        fieldAlias: '50 to 64',
        fieldType: 'Number',
        tableHeader: '50 to 64',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 10,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_50TO64',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age65to84',
        fieldAlias: '65 to 84',
        fieldType: 'Number',
        tableHeader: '65 to 84',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 11,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_65TO84',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age85plus',
        fieldAlias: '85 and over',
        fieldType: 'Number',
        tableHeader: '85 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 12,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: 'Age',
        chartType: 'bar',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_85PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age50plus',
        fieldAlias: '50 and over',
        fieldType: 'Number',
        tableHeader: '50 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 13,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_50PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age60plus',
        fieldAlias: 'AGE60PLUS',
        fieldType: 'Number',
        tableHeader: '60 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 14,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_60PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age65plus',
        fieldAlias: '65 and over',
        fieldType: 'Number',
        tableHeader: '65 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 15,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_65PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age70plus',
        fieldAlias: '70 and over',
        fieldType: 'Number',
        tableHeader: '70 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 16,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_70PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'age75plus',
        fieldAlias: '75 and over',
        fieldType: 'Number',
        tableHeader: '75 and over',
        indentLevel: 1,
        universeField: 0,
        category: 'Age',
        rowID: 17,
        groupID: "<span class='myHiddenClass'>02</span>Age",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_AGE_75PLUS',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'total_pop',
        fieldAlias: 'TOTAL_POP',
        fieldType: 'Number',
        tableHeader: 'Total Population  ',
        indentLevel: 0,
        universeField: 1,
        category: 'Population by Race',
        rowID: 18,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'white',
        fieldAlias: 'White',
        fieldType: 'Number',
        tableHeader: 'White, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 19,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_WHITE',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'black',
        fieldAlias: 'Black',
        fieldType: 'Number',
        tableHeader: 'Black, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 20,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_BLACK',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'native',
        fieldAlias: 'Native American',
        fieldType: 'Number',
        tableHeader: 'Native American, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 21,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_NATIVE',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'asian',
        fieldAlias: 'Asian',
        fieldType: 'Number',
        tableHeader: 'Asian, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 22,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_ASIAN',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'pacific',
        fieldAlias: 'Pacific Islander',
        fieldType: 'Number',
        tableHeader: 'Pacific Islander, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 23,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_PACIFIC',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'other',
        fieldAlias: 'Other',
        fieldType: 'Number',
        tableHeader: 'Other Race, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 24,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_OTHER',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'two_or_more',
        fieldAlias: 'Two or More',
        fieldType: 'Number',
        tableHeader: 'Two or More, Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Race',
        rowID: 25,
        groupID: "<span class='myHiddenClass'>03</span>Population by Race",
        chartCategory: 'Population by Race',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_TWO_OR_MORE',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'total_pop',
        fieldAlias: 'TOTAL_POP',
        fieldType: 'Number',
        tableHeader: 'Total Population    ',
        indentLevel: 0,
        universeField: 1,
        category: 'Population by Ethnicity',
        rowID: 26,
        groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'hispanic',
        fieldAlias: 'Hispanic',
        fieldType: 'Number',
        tableHeader: 'Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Ethnicity',
        rowID: 27,
        groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
        chartCategory: 'Population by Ethnicity',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_HISPANIC',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'not_hispanic',
        fieldAlias: 'Non-Hispanic',
        fieldType: 'Number',
        tableHeader: 'Non-Hispanic',
        indentLevel: 1,
        universeField: 0,
        category: 'Population by Ethnicity',
        rowID: 28,
        groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
        chartCategory: 'Population by Ethnicity',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_NOT_HISPANIC',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'minority_pop',
        fieldAlias: 'MINORITY_POP',
        fieldType: 'Number',
        tableHeader: 'Minority Population',
        indentLevel: 0,
        universeField: 0,
        category: 'General',
        rowID: 29,
        groupID: "<span class='myHiddenClass'>01</span>General",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_MINORITY_POP',
        percentOfField: 'TOTAL_POP'
    },
    {
        fieldName: 'total_hu',
        fieldAlias: 'TOTAL_HU',
        fieldType: 'Number',
        tableHeader: 'Housing Units',
        indentLevel: 0,
        universeField: 1,
        category: 'Housing',
        rowID: 30,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'VACANCY_RATE',
        percentOfField: ''
    },
    {
        fieldName: 'occupied_hu',
        fieldAlias: 'OCCUPIED_HU',
        fieldType: 'Number',
        tableHeader: 'Occupied Housing Units',
        indentLevel: 1,
        universeField: 0,
        category: 'Housing',
        rowID: 31,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_SEASONAL_HU',
        percentOfField: 'TOTAL_HU'
    },
    {
        fieldName: 'avg_hh_size',
        fieldAlias: 'AVG_HH_SIZE',
        fieldType: 'Number',
        tableHeader: 'Average Household Size',
        indentLevel: 2,
        universeField: 0,
        category: 'Housing',
        rowID: 32,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: false,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'owner_occ_hu',
        fieldAlias: 'OWNER_OCC_HU',
        fieldType: 'Number',
        tableHeader: 'Owner-Occupied Housing Units',
        indentLevel: 2,
        universeField: 0,
        category: 'Housing',
        rowID: 33,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'PCT_RENTER_OCCUPIED_HU',
        percentOfField: 'TOTAL_HU'
    },
    {
        fieldName: 'avg_hh_size_owner_hu',
        fieldAlias: 'AVG_HH_SIZE_OWNER_HU',
        fieldType: 'Number',
        tableHeader: 'Avg Household Size for Owner-Occupied Housing Units',
        indentLevel: 3,
        universeField: 0,
        category: 'Housing',
        rowID: 34,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: false,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'renter_occ_hu',
        fieldAlias: 'RENTER_OCC_HU',
        fieldType: 'Number',
        tableHeader: 'Renter-Occupied Housing Units',
        indentLevel: 2,
        universeField: 0,
        category: 'Housing',
        rowID: 35,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: 'TOTAL_HU'
    },
    {
        fieldName: 'avg_hh_size_renter_hu',
        fieldAlias: 'AVG_HH_SIZE_RENTER_HU',
        fieldType: 'Number',
        tableHeader: 'Avg Household Size for Renter-Occupied Housing Units',
        indentLevel: 3,
        universeField: 0,
        category: 'Housing',
        rowID: 36,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: false,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: ''
    },
    {
        fieldName: 'vacant_hu',
        fieldAlias: 'VACANT_HU',
        fieldType: 'Number',
        tableHeader: 'Vacant Housing Units',
        indentLevel: 1,
        universeField: 0,
        category: 'Housing',
        rowID: 37,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: 'pie',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: 'NON_SEASONAL_VACANCY_RATE',
        percentOfField: 'TOTAL_HU'
    },
    {
        fieldName: 'seasonal_hu',
        fieldAlias: 'SEASONAL_HU',
        fieldType: 'Number',
        tableHeader: 'For seasonal, recreational, or occasional use',
        indentLevel: 2,
        universeField: 0,
        category: 'Housing',
        rowID: 38,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: 'TOTAL_HU'
    },
    {
        fieldName: 'non_seasonal_vacant_hu',
        fieldAlias: 'NON_SEASONAL_VACANT_HU',
        fieldType: 'Number',
        tableHeader: 'All other Vacant',
        indentLevel: 2,
        universeField: 0,
        category: 'Housing',
        rowID: 39,
        groupID: "<span class='myHiddenClass'>05</span>Housing",
        chartCategory: '',
        chartType: '',
        canSum: true,
        dataSource: 'Census 2010',
        class: '',
        percentField: '',
        percentOfField: 'TOTAL_HU'
    }
];
