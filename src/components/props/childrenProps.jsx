const ParentComponent = (props) => {
        return (
            <div> {/* This is necessary, we can only return one HTML element */}
                <h1>
                Hello {props.name} Component
                </h1>
                {props.children}
            </div>
        );
    }