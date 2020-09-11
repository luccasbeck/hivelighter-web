import React, { Component } from 'react'
import {
  Dialog,
  TextField,
  Icon,
  Avatar,
  Button,
  Divider,
  IconButton,
  Grid,
  Card,
  MenuItem,
  Input,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from '@material-ui/core'
import { getTimeDifference, generateRandomId } from 'utils.js'
import Scrollbar from 'react-perfect-scrollbar'
import { EgretMenu } from 'egret'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCardInList } from '../../redux/actions/ScrumBoardActions'

class CardEditorDialog extends Component {
  windowResizeListener
  state = {
    id: '',
    title: '',
    description: '',
    commentText: '',
    fullScreen: false,
    updateFromProps: true,
  }

  closeDialog = () => {
    if (this.windowResizeListener)
      window.removeEventListener('resize', this.windowResizeListener)
    this.props.handleClose()
  }

  makeCoverPhoto = (coverImage) => {
    this.setState({ coverImage })
  }

  removeAttachments = (index) => {
    let { attachments = [] } = this.state
    attachments.splice(index, 1)
    this.setState({ attachments })
  }

  handleChange = (event) => {
    this.setState({ updateFromProps: false })

    let target = event.target
    let id = target.value

    if (target.name === 'avatar') {
      let { cardMembers, boardMembers } = this.state
      let member = boardMembers.find((user) => user.id === id)

      if (!target.checked) {
        cardMembers.splice(cardMembers.indexOf(member), 1)
        this.setState({ cardMembers })
      } else {
        cardMembers.push(member)
        this.setState({ cardMembers })
      }
    } else if (target.name === 'label') {
      let { labels, labelList } = this.state
      let label = labelList.find((item) => item.id === parseInt(id))

      if (!target.checked) {
        labels.splice(labels.indexOf(label), 1)
        this.setState({ labels })
      } else {
        labels.push(label)
        this.setState({ labels })
      }
    } else if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      target.name === 'commentText'
    ) {
      this.setState({
        [event.target.name]: event.target.value,
      })
      this.sendComment()
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  }

  handleSave = () => {
    let {
      id,
      title,
      coverImage,
      cardMembers = [],
      labels = [],
      description,
      attachments = [],
      comments = [],
      listId,
      boardId,
    } = this.state

    let card = {
      id,
      title,
      coverImage,
      members: cardMembers.map((member) => member.id),
      labels: labels.map((item) => item.id),
      description,
      attachments,
      comments,
    }
    this.props.updateCardInList(boardId, listId, card)
    this.closeDialog()
  }

  sendComment = () => {
    let { comments, user, commentText } = this.state

    if (commentText.trim() !== '')
      comments.push({
        id: generateRandomId(),
        uid: user.userId,
        text: commentText.trim(),
        time: new Date(),
      })
    this.setState({ comments, commentText: '' })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.updateFromProps && prevState.updateFromProps !== undefined) return {}

    let {
      card,
      memberList = [], //all cardMembers
      labelList = [],
      board,
      user,
    } = nextProps

    let {
      members = [], //members in card
      labels = [],
    } = card

    let cardMembers = members.map((boardMemberId) =>
      memberList.find((member) => member.id === boardMemberId),
    )
    let modifiedLabelList = labels.map((labelId) =>
      labelList.find((label) => label.id === labelId),
    )
    let boardMembers = board.members.map((boardMember) =>
      memberList.find((member) => member.id === boardMember.id),
    )

    return {
      ...card,
      boardId: board.id,
      cardMembers,
      boardMembers,
      labels: [...modifiedLabelList],
      labelList,
      user,
      updateFromProps: false,
    }
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ fullScreen: true })
    }
    if (window)
      this.windowResizeListener = window.addEventListener('resize', (event) => {
        if (event.target.innerWidth < 768) {
          this.setState({ fullScreen: true })
        } else this.setState({ fullScreen: false })
      })
  }

  componentWillUnmount() {
    if (this.windowResizeListener)
      window.removeEventListener('resize', this.windowResizeListener)
  }

  render() {
    let { open, memberList } = this.props
    let {
      fullScreen,
      title,
      cardMembers = [],
      boardMembers = [],
      labels = [],
      labelList = [],
      description,
      attachments = [],
      comments = [],
      user,
      commentText,
    } = this.state

    return (
      <Dialog
        onClose={this.closeDialog}
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        scroll="body"
      >
        <div className="scrum-board">
          <div className="px-sm-24 pt-sm-24">
            <div className="flex flex-middle">
              <div className="flex flex-middle flex-grow-1">
                <Icon className="text-muted">assignment</Icon>
                <Input
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                  className="flex-grow-1 px-8 ml-8 capitalize"
                  type="text"
                  autoFocus
                  name="title"
                  onChange={this.handleChange}
                  disableUnderline={true}
                  value={title}
                ></Input>
              </div>
              <IconButton size="small" onClick={this.closeDialog}>
                <Icon>clear</Icon>
              </IconButton>
            </div>

            <p className="m-0 ml-40 mb-16 text-small text-muted">
              Tech Startup Board Hot Backlog
            </p>

            <div className="ml-40 mb-16 flex flex-wrap flex-space-between">
              <div>
                <h6 className="m-0 mb-8 uppercase text-muted">cardMembers</h6>
                <div className="flex position-relative face-group-36">
                  {cardMembers.map((member) => (
                    <Avatar key={member.id} className="avatar" src={member.avatar} />
                  ))}
                  <EgretMenu
                    horizontalPosition="center"
                    shouldCloseOnItemClick={false}
                    menuButton={
                      <Tooltip title={'Add'} fontSize="large">
                        <Avatar className="avatar ml--12 cursor-pointer">+</Avatar>
                      </Tooltip>
                    }
                  >
                    {boardMembers.map((user) => (
                      <FormControlLabel
                        className="ml-0"
                        key={user.id}
                        control={
                          <Checkbox
                            name="avatar"
                            checked={cardMembers.some((member) => member.id === user.id)}
                            onChange={this.handleChange}
                            value={user.id}
                          />
                        }
                        label={
                          <div className="flex flex-middle">
                            <Avatar src={user.avatar} className="size-24"></Avatar>
                            <span className="ml-12">{user.name}</span>
                          </div>
                        }
                      />
                    ))}
                  </EgretMenu>
                </div>
              </div>
              <div>
                <h6 className="m-0 mb-8 uppercase text-muted">labels</h6>
                <div className="button-group">
                  {labels.map((label) => (
                    <Button
                      key={label.id}
                      size="small"
                      variant="contained"
                      className={`capitalize mr-4 text-white text-small bg-${label.color}`}
                    >
                      {label.title}
                    </Button>
                  ))}
                  <EgretMenu
                    horizontalPosition="right"
                    shouldCloseOnItemClick={false}
                    menuButton={
                      <Tooltip title={'Add'} fontSize="large">
                        <Button className="bg-light-gray" size="small">
                          +
                        </Button>
                      </Tooltip>
                    }
                  >
                    {labelList.map((label) => (
                      <FormControlLabel
                        className="ml-0"
                        key={label.id}
                        control={
                          <Checkbox
                            checked={labels.some((item) => item.id === label.id)}
                            onChange={this.handleChange}
                            value={label.id}
                            name="label"
                          />
                        }
                        label={
                          <div className="flex flex-middle">
                            <div
                              className={`border-radius-4 size-24 bg-${label.color}`}
                            ></div>
                            <span className="ml-12">{label.title}</span>
                          </div>
                        }
                      />
                    ))}
                  </EgretMenu>
                </div>
              </div>
            </div>
          </div>

          <Divider></Divider>

          <Scrollbar
            className="position-relative pt-16 mb-16"
            style={{ maxHeight: '45vh' }}
          >
            <div className="px-sm-24 pt-16">
              <div className="flex flex-middle mb-8">
                <Icon className="text-muted">description</Icon>
                <h6 className="m-0 ml-16 uppercase text-muted">description</h6>
              </div>
              <div className="ml-40 mb-16 flex">
                <TextField
                  className="text-muted"
                  onChange={this.handleChange}
                  name="description"
                  value={description}
                  variant="outlined"
                  fullWidth
                  multiline
                />
              </div>

              <div className="flex flex-space-between flex-middle mb-16">
                <div className="flex flex-middle">
                  <Icon className="text-muted">attach_file</Icon>
                  <h6 className="m-0 ml-16 uppercase text-muted">attachments</h6>
                </div>

                <label htmlFor="upload-file">
                  <Button
                    className="text-primary uppercase font-weight-500"
                    component="span"
                  >
                    + add an attachment
                  </Button>
                </label>
                <input className="display-none" id="upload-file" type="file" multiple />
              </div>

              <div className="ml-40 mb-16">
                <Grid container spacing={2}>
                  {attachments.map((file, id) => (
                    <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
                      <Card
                        className="p-4 flex flex-middle bg-default h-100"
                        elevation={2}
                      >
                        <div className="flex flex-middle border-radius-8">
                          <img src={file.url} alt="image cover photo" />
                        </div>
                        <div className="ml-16">
                          <h6 className="m-0 text-muted capitalize">{file.name}</h6>
                          <small className="text-muted text-small capitalize">
                            {file.size}
                          </small>
                        </div>
                        <EgretMenu
                          horizontalPosition="center"
                          menuButton={
                            <IconButton className="ml-16">
                              <Icon>more_vert</Icon>
                            </IconButton>
                          }
                        >
                          <MenuItem
                            className="flex flex-middle"
                            onClick={() => this.makeCoverPhoto(file.url)}
                            style={{ minWidth: 165 }}
                          >
                            <Icon> insert_photo </Icon>
                            <span className="pl-16"> Make Cover </span>
                          </MenuItem>
                          <MenuItem
                            onClick={() => this.removeAttachments(id)}
                            className="flex flex-middle"
                            style={{ minWidth: 165 }}
                          >
                            <Icon> delete </Icon>
                            <span className="pl-16"> Remove </span>
                          </MenuItem>
                        </EgretMenu>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>

            <Divider className="mb-16"></Divider>

            <div className="px-sm-24">
              <div className="flex flex-middle mb-16">
                <Icon className="text-muted">message</Icon>
                <h6 className="m-0 ml-16 uppercase text-muted">comments</h6>
              </div>
              <div className="comments ml-40">
                {comments.map((comment) => {
                  let user = memberList.find((user) => user.id === comment.uid)
                  return (
                    <div className="mb-16" key={comment.id}>
                      <div className="flex flex-middle mb-8">
                        <Avatar className="avatar size-36" src={user.avatar} />
                        <div className="ml-12">
                          <h6 className="m-0">{user.name}</h6>
                          <small>{getTimeDifference(new Date(comment.time))} ago</small>
                        </div>
                      </div>
                      <p className="m-0 text-muted">{comment.text}</p>
                    </div>
                  )
                })}

                <div className="flex flex-middle mb-16">
                  <Avatar className="avatar size-36" src={user.photoURL} />
                  <div className="flex-grow-1 flex">
                    <TextField
                      className="ml-12 text-muted"
                      onChange={this.handleChange}
                      onKeyDown={this.handleChange}
                      variant="outlined"
                      name="commentText"
                      value={commentText}
                      fullWidth
                      inputProps={{
                        style: {
                          padding: '10px',
                        },
                      }}
                    />
                  </div>
                  <Button onClick={this.sendComment}>Send</Button>
                </div>
              </div>
            </div>
          </Scrollbar>

          <div className="px-sm-24 mb-12 flex flex-end">
            <Button className="mr-12" onClick={this.closeDialog}>
              Cancel
            </Button>
            <Button onClick={this.handleSave} variant="contained" color="primary">
              Save
            </Button>
          </div>
        </div>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  updateCardInList: PropTypes.func.isRequired,
  board: state.scrumboard.board,
  memberList: state.scrumboard.memberList,
  labelList: state.scrumboard.labelList,
  user: state.user,
})

export default connect(mapStateToProps, { updateCardInList })(CardEditorDialog)
