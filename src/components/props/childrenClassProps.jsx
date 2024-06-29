class ParentComponent extends React.Component {
            render() {
                return (
                    <div>
                        <h1>Hello {this.props.name} Component</h1>
                        {this.props.children}
                    </div>
                );
            }
        }

        export default ParentComponent
