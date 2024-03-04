import React, { useEffect } from 'react';
import styles from './styles.module.css';
import LinkIcon from '../stats/LinkIcon';

const formatFileSize = (bytes) => {
  const fileSizeInKB = (bytes / 1024).toFixed(1);
  return `${fileSizeInKB} KB`;
};

export default function DownloadBox({ fileName }): JSX.Element {
  const [fileInfo, setFileInfo] = React.useState<{
    fileSize: string;
    fileType: string;
  }>();

  const openFile = () => {
    window.location.href = `../../files/${fileName}`;
  };

  useEffect(() => {
    const fetchFileDetails = async () => {
      const filePath = `../../files/${fileName}`; // Replace with the actual static path and file name
      const response = await fetch(filePath);
      const fileSize = response.headers.get("Content-Length");

      setFileInfo({ fileSize, fileType: fileName.split(".").pop() });
    };

    fetchFileDetails();
  }, [fileName]);

  return (
    <div
      className={styles.fileBox}
      onClick={openFile}
      title="Click to open the file"
    >
      <div className={styles.icon}>
        <LinkIcon width={20} height={20} />
      </div>
      <div className={styles.fileInfo}>
        <div>
          <span className={styles.fileName}>{fileName}</span>
          <span className={styles.fileSize}>{formatFileSize(fileInfo?.fileSize)}</span>
        </div>
        <span className={styles.fileType}>{fileInfo?.fileType}</span>
      </div>
    </div>
  );
}
