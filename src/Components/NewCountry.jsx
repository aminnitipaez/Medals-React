import {useState} from 'react';

function NewCountry({ onAdd}) {
    const [showDialog, setShowDialog] = useState(false);
    const [name, setName] = useState('');

    const handleSave = () => {
        if (name.trim().length === 0){return;}
        onAdd(name.trim());
        setName('');
        setShowDialog(false);
    };

    const handleCancel = ()=>{
        setName('');
        setShowDialog(false);
    };

    return (
        <div>
            <button className="add-button" onClick={() => setShowDialog(true)}>+</button>

            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <h3>Enter new country name</h3>
                        <input
                            type="text"
                            placeholder="enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="dialog-buttons">
                            <button
                                onClick={handleSave}
                                disabled={name.trim().length === 0}
                            >
                                save
                            </button>
                            <button onClick={handleCancel}>cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default NewCountry;