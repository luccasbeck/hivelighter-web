import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, withStyles } from '@material-ui/core'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import styled from 'styled-components'
import { setUserPicUpload } from 'app/redux/actions/ProfileActions'

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  aligin-items: center;
  justify-content: center;
  .save-profile-btn {
    font-family: 'Geomanist';
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    border: 1px solid #75787d;
    border-radius: 3px;
    background: #102041;
    margin-right: 20px;
    padding: 15px 16px 12px 16px;
    line-height: 1;
  }
  .choose-photo-btn {
    font-family: 'Geomanist';
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #102041;
    border: 1px solid #75787d;
    border-radius: 3px;
    background: #102041;
    margin-right: 20px;
    background: white;
    padding: 15px 16px 12px 16px;
    line-height: 1;
  }
`

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '30px 30px 20px 30px',
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: '8px 30px 20px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))(MuiDialogActions)

function getCroppedImg(image, crop, width, height, fileName) {
  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    width * scaleX,
    height * scaleY,
    0,
    0,
    width,
    height,
  )

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      file.name = fileName
      resolve(file)
    }, 'image/jpeg')
  })
}

function ProfilePictureCrop(props) {
  const { picture, onClose } = props
  const [upImg, setUpImg] = useState(picture)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState({ unit: '%', width: 50, aspect: 1 })
  const [completedCrop, setCompletedCrop] = useState(null)
  const [originFile, setOriginFile] = useState(null)

  const d = useDispatch()

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  useEffect(() => {
    if (!completedCrop || !imgRef.current) {
      return
    }
  }, [completedCrop])

  const makeClientCrop = async (crop, width, height) => {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImage = await getCroppedImg(
        imgRef.current,
        crop,
        width,
        height,
        'newFile.jpeg',
      )
      return croppedImage
    }
  }

  const handleChoosePhoto = () => {
    document.getElementById('file').click()
  }

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setUpImg(reader.result))
      reader.readAsDataURL(e.target.files[0])
      setOriginFile(e.target.files[0])
    }
  }

  const handleSave = async () => {
    let low_croppedImage = await makeClientCrop(completedCrop, 80, 80)
    let hi_croppedImage = await makeClientCrop(completedCrop, 200, 200)
    const data = new FormData()
    data.append('thumb', low_croppedImage)
    data.append('thumb-200', hi_croppedImage)
    data.append('originImage', originFile)
    await d(setUserPicUpload(data))
    onClose()
  }

  return (
    <>
      <DialogContent>
        <div className="App">
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <ActionContainer>
          <Button className="save-profile-btn" onClick={handleSave}>
            Save Profile Photo
          </Button>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={onSelectFile}
          />
          <Button className="choose-photo-btn" onClick={handleChoosePhoto}>
            Choose Photo
          </Button>
        </ActionContainer>
      </DialogActions>
    </>
  )
}

export default ProfilePictureCrop
