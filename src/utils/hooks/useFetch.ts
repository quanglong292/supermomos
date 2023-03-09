import { useState, useEffect } from 'react';

const BASE_URL: string = process.env.BASE_API_URL ?? "http:localhost:3000/"

export const fetcher = async (path: string, body: any) => {
  let res = {}

  const POST = async () => {
    return await fetch(path, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body,
    })
  }

  const GET = async () => {
    const response = await fetch(path, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    })
    res = response
    return res
  }

  return {POST, GET}
}

export default (path: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(path);
        const data = response
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [path]);

  return { data, loading, error };
}
