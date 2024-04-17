import React from 'react'

interface Props {
  data: any[];
}
const Output = (props: Props) => {
  return (
    <div id='output'>
      {props.data.map((item, index) => {
        const isEven = index % 2 === 0;
        const lines: string[] = item.split('\n');

        // Define variables to keep track of current list type and items
        let currentListType: 'ol' | 'ul' | null = null;
        let currentListItems: JSX.Element[] = [];

        // Function to render current list and reset items
        const renderList = () => {
          if (currentListType && currentListItems.length > 0) {
            return React.createElement(currentListType, {}, currentListItems);
          }
          return null;
        };

        return (
          <div className='rounded p mulish-light' key={index} id={isEven ? `userInput-${index}` : `aiOutput-${index}`}>
            <div className='flex flex-align gap-third'>
              <div className={`${isEven ? 'bg-green' : 'bg-red'} all-round flex-center p-tenth`}>
                {isEven ? <span className="material-symbols-outlined text-color-white">egg_alt</span> : <span className="material-symbols-outlined">restaurant_menu</span>}
              </div>
              <p className='p margin-none mulish-bold'>You</p>
            </div>
            <div className='recipe-output-div'>
              {lines.map((line, i) => {
                if (/^\s*\d+\./.test(line)) {
                  // If line starts with a number followed by a dot, it's an ordered list item
                  if (currentListType !== 'ol') {
                    // If current list type is not 'ol', render the current list and reset items
                    const list = renderList();
                    currentListType = 'ol';
                    currentListItems = [];
                    return list;
                  }
                  // Add the ordered list item to currentListItems
                  currentListItems.push(<li key={i}><p className='p'>{line.replace(/^\s*\d+\./, '')}</p></li>);
                } 
                else if (/^\s*-\s+/.test(line)) {
                  // If line starts with a hyphen followed by space(s), it's an unordered list item
                  if (currentListType !== 'ul') {
                    // If current list type is not 'ul', render the current list and reset items
                    const list = renderList();
                    currentListType = 'ul';
                    currentListItems = [];
                    return list;
                  }
                  // Add the unordered list item to currentListItems
                  currentListItems.push(<li key={i}><p className='p'>{line.replace(/^\s*-\s+/, '')}</p></li>);
                } 
                else {
                  // If the line doesn't match list item patterns, treat it as a paragraph
                  return <p key={i} className='p'>{line}</p>;
                }
                return null;
              })}
              {/* Render the remaining list after looping through all lines */}
              {renderList()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Output;