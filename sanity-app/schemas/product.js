export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Jariboti', value: 'jariboti' },
          { title: 'Murabbajat', value: 'murabbajat' },
          { title: 'Arkiaat', value: 'arkiaat' },
          { title: 'Mashrubaat', value: 'mashrubaat' },
          { title: 'Roghan', value: 'roghan' },
          { title: 'Masalajaat', value: 'masalajaat' },
          { title: 'Achaaar', value: 'achaar' },

          
          // Add more categories as needed
        ],
      },
    },
  ]
}