import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const actions = (
    <React.Fragment>
      <button
        onClick={() => props.deleteStream(props.match.params.id)}
        className=" ui  button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    return props.stream
      ? `Are you sure you want to delete this stream with title: ${props.stream.title}?`
      : `Are you sure you want to delete this stream?`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
